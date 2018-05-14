import Vue from 'vue'
import Vuex from 'vuex'

import modules from '@/store/_index'

Vue.use(Vuex)

Vue.prototype.$createStore = createStore
Vue.prototype.$getLocalStore = getLocalStore

const store = {
  strict: false, // development mode is not allowed!!!
  modules
}

export default new Vuex.Store(store)

function getLocalStore (namespace) {
  let $store = this.$store

  return {
    $namespace: namespace,

    $unregister: () => {
      $store.unregisterModule(namespace)
    },

    $state: (key) => {
      return $store.state[namespace][key]
    },

    $getters: (key) => {
      return $store.getters[namespace + '/' + key]
    },

    $commit: (type, payload) => {
      $store.commit(namespace + '/' + type, payload)
    },

    $dispatch: (type, payload) => {
      $store.dispatch(namespace + '/' + type, payload)
    }
  }
}

function createStore (namespace, store) {
  this.$store.registerModule(namespace, store)

  return this.$getLocalStore(namespace)
}
