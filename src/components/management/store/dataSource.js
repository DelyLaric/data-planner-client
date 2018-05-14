import http from '@/core/http'
// import vue from 'vue'

export default {
  namespaced: true,

  state () {
    return {
      view: false,

      dataSource: {},

      selected: undefined,
      collected: [],

      pending: false,
      initialized: false
    }
  },

  getters: {
    data (state) {
      return state.dataSource.data
    },

    meta (state, getters) {
      return state.dataSource
    },

    selectedData (state, getters) {
      return (state.selected !== undefined && getters.data) ? getters.data[state.selected] : false
    },

    collectedData (state, getters) {
      return state.collected.map(key => {
        return getters.data[key]
      })
    }
  },

  mutations: {
    select (state, pointer) {
      state.selected = pointer
    },

    collect (state, pointers) {
      state.collected = pointers
    },

    setView (state, view) {
      state.view = view
    },

    setParams (state, params) {
      state.params = params
    },

    updateSelected (state, data) {
      state.dataSource.data.splice(
        state.selected, 1, data
      )
    },

    updateCollected (state, data) {
      let set = state.dataSource.data
      state.collected.forEach(key => {
        set.splice(key, 1, data.find(item => {
          return item._id === set[key]._id
        }))
      })
    },

    unshiftData (state, data) {
      state.dataSource.data.unshift(data)
    }

  },

  actions: {
    async initialize ({state, dispatch}) {
      await dispatch('getDataSource')

      state.initialized = true
    },

    async getDataSource ({state}) {
      state.pending = true
      state.selected = undefined
      state.collected = []
      let {data: dataSource} = await http.post('data/search', {
        view: state.view,
        ...state.params
      })
      state.dataSource = dataSource
      dataSource.data.length && (state.selected = 0)
      state.pending = false
    }
  }
}
