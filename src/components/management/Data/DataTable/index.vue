<template>
  <!-- pending 用于制造数据更换的刷新感 -->
  <div
    class="table-container"
    v-show="!dataSource.$state('pending')"
  >
    <TableView
      v-for="view in table.views"
      v-show="container.$state('data.table.view') === view.title"
      :key="view.name"
      :view="view"
    />
  </div>
</template>

<script>
import TableView from './TableView'

export default {
  components: {
    TableView
  },

  inject: ['table', 'dataSource', 'container']
}
</script>
