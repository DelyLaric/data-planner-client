<template>
  <Container>
    <Container column flex padding="6px"
      v-if="isInitialized"
      :show="!showRecords"
      :width="showRightbar ? 'calc(100% - 278px)' : '100%'"
    >
      <TheHeader />

      <TheQuery v-show="container.$state('table.query')"/>

      <div class="is-auto">
        <MultiViewTable
          :views="tableSchema.views"
          :data="dataSource.$getters('data')"
          :loading="dataSource.$state('pending')"
          :selected="dataSource.$state('selected')"
          :collected="dataSource.$state('collected')"
          @select="dataSource.$commit('select', $event)"
          @collect="dataSource.$commit('collect', $event)"
          @show-records="handleShowRecords"
        />
      </div>

      <Divider height="6px" />

      <Pagination
        :meta="dataSource.$getters('meta')"
        @change-page="dataSource.$dispatch('changePage', $event)"
      />

      <TheRight />
    </Container>

    <!-- Records 组件 因此必须用 v-if，利用 created 来加载数据 -->

    <TheRecords v-if="showRecords"/>
  </Container>
</template>

<script>
import TheQuery from './Query'
import TheRight from './TheRight'
import TheRecords from './Records'
import TheHeader from './TheHeader'

import Pagination from '@/components/pagination'
import MultiViewTable from '@/components/multi-view-table'

export default {
  components: {
    TheRight,
    TheQuery,
    TheHeader,
    TheRecords,
    Pagination,
    MultiViewTable
  },

  inject: ['dataSource', 'container', 'tableSchema', 'recordSchema'],

  provide () {
    return {
      'querySchema': this.tableSchema.query
    }
  },

  computed: {
    isPending () {
      return this.dataSource.$state('pending')
    },

    isInitialized () {
      return this.dataSource.$state('initialized')
    },

    showRecords () {
      return this.container.$state('table.records')
    },

    showRightbar () {
      return this.container.$state('table.rightbar')
    }
  },

  methods: {
    handleShowRecords (data) {
      this.container.$commit('setRecordParams', data._id)
      this.container.$commit('toggleTableRecords')
    }
  },

  created () {
    this.dataSource.$dispatch('initialize', {
      table: this.tableSchema.dataSource.table
    })
  }
}
</script>
