// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import http from '@/core/http'
import store from '@/core/vuex'
import router from '@/core/router'

import elements from '@/elements'

import 'babel-polyfill'
import '@/resources/sass/index.sass'

Vue.use(elements)

Vue.prototype.$http = http

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
