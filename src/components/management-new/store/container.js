export default {
  namespaced: true,

  state () {
    return {
      'tab': false,

      'table.view': false,
      'table.query': false,
      'table.rightbar': false,

      'record.params': {}
    }
  },

  mutations: {
    selectTab (state, tab) {
      state.tab = tab
    },

    selectTableView (state, view) {
      state['table.view'] = view
    },

    toggleTableQuery (state, view) {
      state['table.query'] = !state['table.query']
    },

    toggleTableRightbar (state, view) {
      state['table.rightbar'] = (view === state['table.rightbar'] ? false : view)
    },

    setRecordParams (state, params) {
      state['record.params'] = params
    }
  }
}
