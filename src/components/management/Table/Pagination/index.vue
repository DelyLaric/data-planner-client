<template>
  <div>
    <Pagination
      class="is-pulled-right"
      :total="meta.total"
      :page="meta.current_page"
      :page-size="meta.per_page"
      :last-page="meta.last_page"
      @change-page="dataSource.$dispatch('changePage', $event)"
    />
  </div>
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
