import Vue from 'vue'
import axios from 'axios'

let localUrl = 'http://slmg.api'
let serverUrl = 'http://115.159.51.252:8000'
let http = axios.create()

if (Vue.config.productionTip === true) {
  axios.defaults.baseURL = localUrl
} else {
  axios.defaults.baseURL = serverUrl
}

http.interceptors.request.use((config) => {
  Vue.prototype.$loading.start()
  return config
}, function (error) {
  return Promise.reject(error)
})

http.interceptors.response.use((response) => {
  // 统一处理所有的正确响应
  switch (response.status) {
    case 201:
      Vue.prototype.$message.success({title: response.data.message})
      break
  }
  Vue.prototype.$loading.finish()
  return response
}, (error) => {
  // 统一处理所有的异常响应
  let status = typeof (error.response) === 'undefined' ? -1 : error.response.status
  let message = ''
  switch (status) {
    case -1:
      message = 'network error'
      break
    case 400:
      message = error.response.data.message
      break
    default:
      message = 'server error'
  }
  Vue.prototype.$message.error({
    title: message
  })

  Vue.prototype.$loading.error()
  return Promise.reject(error)
})

export default http
