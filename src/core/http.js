import Vue from 'vue'
import axios from 'axios'

let localUrl = 'http://slmg.api'
let serverUrl = 'http://115.159.51.252:8000'

if (Vue.config.productionTip === true) {
  axios.defaults.baseURL = localUrl
} else {
  axios.defaults.baseURL = serverUrl
}

let http = axios.create()

export default http
