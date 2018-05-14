export default {
  namespaced: true,

  state: {
    'tab': false,
    'users.manage': false
  },

  mutations: {
    select (state, {view, name}) {
      state[view] = name
    },

    toggle (state, {view, name}) {
      state[view] = (state[view] === name) ? false : name
    },

    close (state, view) {
      state[view] = false
    }
  }
}
