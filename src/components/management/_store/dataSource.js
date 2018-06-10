import http from '@/core/http'
// import vue from 'vue'

export default {
  namespaced: true,

  state () {
    return {
      params: {
        table: '',
        page: 1,
        pageSize: 50,
        where: []
      },

      dataSource: {},

      selected: undefined,
      collected: [],

      pending: false,
      initialized: false
    }
  },

  getters: {
    data (state) {
      return state.dataSource.data || []
    },

    meta (state, getters) {
      return state.dataSource.meta
    },

    selectedData (state, getters) {
      return (state.selected !== undefined && getters.data) ? getters.data[state.selected] : false
    },

    collectedData (state, getters) {
      return getters.data.filter((item, key) => state.collected[key])
    },

    params (state) {
      return state.params
    }
  },

  mutations: {
    select (state, pointer) {
      state.selected = pointer
    },

    collect (state, pointers) {
      if (Array.isArray(pointers)) {
        state.collected = pointers
      } else {
        let flag = state.collected[pointers]
        state.collected.splice(pointers, 1, !flag)
      }
    },

    setPage (state, page) {
      state.params.page = page
    },

    setQuery (state, where) {
      state.params.where = where
    },

    updateSelected (state, data) {
      state.dataSource.data.splice(
        state.selected, 1, data
      )
    },

    updateCollected (state, data) {
      let set = state.dataSource.data
      state.collected.forEach((item, key) => {
        item && set.splice(key, 1, data.find(elem => {
          return elem._id === set[key]._id
        }))
      })
    },

    unshiftData (state, data) {
      state.dataSource.data.unshift(data)
    }

  },

  actions: {
    async initialize ({state, dispatch}, {table}) {
      // 违规操作
      state.params.table = table
      await dispatch('refresh')

      // 违规操作
      state.initialized = true
    },

    async refresh ({state, dispatch}) {
      state.params.page = 1
      await dispatch('getDataSource')
    },

    async changePage ({state, dispatch}, page) {
      if (state.pending) return
      state.params.page = page
      await dispatch('getDataSource')
    },

    async getDataSource ({state, getters}) {
      // 违规操作

      state.pending = true
      state.selected = undefined
      state.collected = []
      let {data: dataSource} = await http.post(
        'data/search', getters.params
      )

      // 违规操作
      state.dataSource = dataSource
      dataSource.data.length && (state.selected = 0)
      state.pending = false
      state.collected = dataSource.data.map(() => false)
    }
  }
}
