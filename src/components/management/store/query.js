export default {
  namespaced: true,

  state () {
    return {
      page: 1,
      pageSize: 100,

      where: []
    }
  },

  getters: {
    params (state) {
      return state
    }
  },

  mutations: {
    setPage (state, page) {
      state.page = page
    },

    setPageSize (state, pageSize) {
      state.pageSize = pageSize
    },

    setQuery (state, where) {
      state.where = where
      state.page = 1
    },

    initial (state) {
      state.page = 1
    }
  }
}
