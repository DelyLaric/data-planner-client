import http from '@/core/http'

export default {
  namespaced: true,

  state () {
    return {
      params: {
        page: 1,
        pageSize: 100,
        order: ['id', 'asc'],
        disabled: false,
        name: '',
        role: ''
      },

      dataSource: {
        data: []
      },

      loading: false,
      initialized: false,
      selected: undefined
    }
  },

  getters: {
    state (state) {
      return state.state
    },

    data (state) {
      return state.dataSource.data
    },

    meta (state, getters) {
      return state.dataSource
    },

    selectedUser (state, getters) {
      if (state.selected === undefined) return
      return getters.data[state.selected]
    }
  },

  mutations: {
    select (state, key) {
      state.selected = key
    },

    setPage (state, page) {
      state.params.page = page
    },

    setRole (state, role) {
      state.params.role = role
    },

    setName (state, name) {
      state.params.name = name
    },

    updateData (state, {key, data}) {
      state.dataSource.data.splice(key, 1, data)
    },

    updateSelected (state, data) {
      state.dataSource.data.splice(
        state.selected, 1, data
      )
    }
  },

  actions: {
    async initialize ({state, dispatch}) {
      await dispatch('getDataSource')
      state.initialized = true
    },

    async refresh ({state, dispatch}) {
      state.params.page = 1
      await dispatch('getDataSource')
    },

    async getDataSource ({state, dispatch}) {
      dispatch('beforeHook')
      let {data: dataSource} = await http.post('users/search', state.params)
      dispatch('afterHook', dataSource)
    },

    beforeHook ({state}) {
      state.loading = true
      state.selected = undefined
    },

    afterHook ({state, commit}, dataSource) {
      state.dataSource = dataSource
      dataSource.data.length && commit('select', 0)
      state.loading = false
    }
  }
}
