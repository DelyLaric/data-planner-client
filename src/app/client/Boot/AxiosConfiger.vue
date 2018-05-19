<script>
import http from '@/core/http'

export default {
  render: h => ({}),

  inject: ['system'],

  methods: {
    setHttpConfig
  },

  created () {
    this.setHttpConfig()
  }
}

function setHttpConfig () {
  http.interceptors.request.use((config) => {
    this.$loading.start()
    return config
  }, function (error) {
    return Promise.reject(error)
  })

  http.interceptors.response.use((response) => {
    // 统一处理所有的正确响应
    switch (response.status) {
      case 201:
        this.$message.success({title: response.data.message})
        break
    }
    this.$loading.finish()

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
      case 401:
        this.$router.push('/login')
        message = '请重新登录'
        break
      default:
        message = 'server error'
    }

    this.$message.error({
      title: message
    })

    this.$loading.error()
    return Promise.reject(error)
  })
}
</script>
