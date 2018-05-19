import axios from 'axios'
import http from '@/core/http'
import store from '@/core/store'
import router from '@/core/router'

export default {
  namespaced: true,

  state: {
    'user': false,
    'isLogged': false,
    'isLogging': false
  },

  mutations: {
    setUser (state, user) {
      state['user'] = user
    },

    storeUser (state, user) {
      store.set('user', user)
    },

    setIsLogged (state, flag) {
      state['isLogged'] = flag
    },

    setIsLogging (state, flag) {
      state['isLogging'] = flag
    },

    storeToken (state, token) {
      store.set('token', token)
    },

    addTokenInHeader (state, token) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
    },

    logout (state) {
      state['user'] = false
      state['isLogged'] = false
      store.remove('token')
      store.remove('user')
      axios.defaults.headers.common['Authorization'] = undefined
      router.push('/login')
    }

  },

  actions: {
    async getTokenFromStore ({commit}) {
      if (router.currentRoute.name === 'login') return

      let token = store.get('token')
      let user = store.get('user')

      if (!token) {
        router.push('/login')
        return
      }

      commit('addTokenInHeader', token)
      let {data} = await http.post('auth/check')
      if (data.user) {
        user = data.user
        commit('storeUser', user)
        console.log('auto update store.user')
      }
      if (data.token) {
        token = data.token
        commit('storeToken', token)
        commit('addTokenInHeader', token)
        console.log('auto update store.token')
      }

      commit('setUser', user)
      commit('setIsLogged', true)
    },

    async login ({commit}, params) {
      try {
        commit('setIsLogging', true)
        let {data: {data: {user, token}}} = await http.post('auth/login', params)
        commit('storeUser', user)
        commit('storeToken', token)
        commit('addTokenInHeader', token)
        commit('setIsLogged', true)
        router.push('/')
      } finally {
        commit('setIsLogging', false)
      }
    }
  }
}
