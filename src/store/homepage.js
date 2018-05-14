export default {
  namespaced: true,

  state: {
    'sidebar': false
  },

  mutations: {
    toggleSidebar (state) {
      state.sidebar = !state.sidebar
    },

    showSidebar (state) {
      state.sidebar = true
    },

    hideSidebar (state) {
      state.sidebar = false
    }
  }
}
