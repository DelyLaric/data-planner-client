<template>
  <Pagination
    style="margin-left: 0"
    :total="meta.total"
    :page="meta.current_page"
    :page-size="meta.per_page"
    :last-page="meta.last_page"
    @change-page="dataSource.$dispatch('changePage', $event)"
  />
</template>

<script>
export default {
  inject: ['dataSource'],

  computed: {
    meta () {
      return this.dataSource.$getters('meta')
    }
  }
}
</script>
