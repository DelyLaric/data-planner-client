import http from '@/core/http'

export default {
  namespaced: true,

  state: {
    roles: [],

    initialized: false
  },

  actions: {
    async initialize ({state, dispatch}) {
      await dispatch('getRoles')
      state.initialized = true
    },

    async getRoles ({state}) {
      let {data} = await http.post('store/datasource', {
        table: '_system.roles',
        columns: ['id', 'name']
      })

      state.roles = data
    }
  }
}
