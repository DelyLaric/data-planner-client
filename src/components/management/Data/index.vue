<template>
  <!-- initialized  为模块的数据源 -->
  <Container column flex padding="6px"
    v-if="dataSource.$state('initialized')"
    :width="container.$state('table.rightbar') ? 'calc(100% - 278px)' : '100%'"
  >
    <TheHeader />

    <TheQuery v-show="container.$state('table.query')"/>

    <ViewSelector />

    <div class="is-auto">
      <div class="table-container">
        <div v-show="!pending">
          <DataView
            v-for="view in tableSchema.views"
            v-show="container.$state('table.view') === view.label"
            :key="view.title"
            :view="view"
          />
        </div>
      </div>
    </div>

    <Divider height="6px" />

    <Pagination />

    <TheRight />
  </Container>
</template>

<script>
import DataView from './DataView'
import TheHeader from './containers/header'
import TheRight from './containers/right'
import TheQuery from './Query'

import ViewSelector from './ViewSelector'
import Pagination from './Pagination'

export default {
  components: {
    DataView,
    TheHeader,
    TheRight,
    TheQuery,
    ViewSelector,
    Pagination
  },

  inject: ['dataSource', 'container', 'tableSchema'],

  provide () {
    return {
      'querySchema': this.tableSchema.query
    }
  },

  computed: {
    pending () {
      return this.dataSource.$state('pending')
    }
  },

  async created () {
    await this.dataSource.$dispatch('initialize', {
      table: this.tableSchema.dataSource.table
    })
  }
}
</script>
