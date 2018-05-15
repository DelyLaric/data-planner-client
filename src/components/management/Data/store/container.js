export default {
  namespaced: true,

  state () {
    return {
      'view': false,
      'query': false,
      'rightbar': false,

      'records': false,
      'records.params': false

    }
  },

  mutations: {
    selectView (state, view) {
      state['view'] = view
    },

    toggleRecordView (state, params) {
      state['records'] = !state['records']
      state['records.params'] = params
    },

    toggleQueryAddon (state, view) {
      state['query'] = !state['query']
    },

    toggleRightbar (state, view) {
      state['rightbar'] = (view === state['rightbar'] ? false : view)
    }
  }
}
