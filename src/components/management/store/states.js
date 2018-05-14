export default {
  namespaced: true,

  state () {
    return {
      'data.initialized': false,
      'data.pending': false
    }
  },

  mutations: {
    set (store, {state, value}) {
      store[state] = value
    }
  }
}
