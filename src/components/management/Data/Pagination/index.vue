<template>
  <Pagination
    :total="meta.total"
    :page="meta.current_page"
    :page-size="meta.per_page"
    :last-page="meta.last_page"
    @change-page="changePage"
    style="margin-left: 0px"
  />
</template>

<script>
export default {
  inject: ['dataSource', 'query'],

  computed: {
    meta () {
      return this.dataSource.$getters('meta')
    }
  },

  methods: {
    changePage (page) {
      this.query.$commit('setPage', page)
      this.dataSource.$dispatch('getDataSource')
    }
  }
}
</script>
