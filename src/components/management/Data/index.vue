<template>
  <!-- initialized  为模块的数据源 -->
  <Container auto paddingless
    v-if="dataSource.$state('initialized')"
    :width="container.$state('data.rightbar') ? 'calc(100% - 278px)' : '100%'"
  >
    <Container flex column paddingless>
      <TheHeader />

      <TheAddon />

      <ViewSelector />

      <Container auto paddingless>
        <TheTable />
      </Container>

      <Divider height="4px" />

      <Pagination />

      <TheRight />
    </Container>
  </Container>
</template>

<script>
import TheTable from './DataTable'
import TheAddon from './Containers/TheAddon'
import TheRight from './Containers/TheRight'
import TheHeader from './Containers/TheHeader'
import ViewSelector from './ViewSelector'
import Pagination from './Pagination'

export default {
  components: {
    TheAddon,
    TheTable,
    TheRight,
    TheHeader,
    ViewSelector,
    Pagination
  },

  inject: ['container', 'dataSource', 'query'],

  created () {
    this.dataSource.$commit('setParams', this.query.$getters('params'))
    this.dataSource.$commit('setView', this.dataSource.view)
    this.dataSource.$dispatch('initialize')
  }
}
</script>
