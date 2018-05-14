<template>
  <Pagination
    :meta="meta"
    @changePage="changePage"
  />
</template>

<script>
import Pagination from '@/components/pagination'

export default {
  components: {
    Pagination
  },

  inject: ['users'],

  computed: {
    meta () {
      return this.users.$getters('meta')
    }
  },

  methods: {
    changePage (page) {
      this.users.$commit('setPage', page)
      this.users.$dispatch('getDataSource')
    }
  }
}
</script>
