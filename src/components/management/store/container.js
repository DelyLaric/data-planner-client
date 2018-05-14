export default {
  namespaced: true,

  state () {
    return {
      'tab': false,
      'data.addon': false,
      'data.table.view': false,
      'data.rightbar': false,
      'upload.view': false
    }
  },

  mutations: {
    select (state, {view, name}) {
      state[view] = name
    },

    toggle (state, {view, name}) {
      state[view] = (state[view] === name) ? false : name
    },

    hide (state) {
      state.view = false
    }
  }
}
