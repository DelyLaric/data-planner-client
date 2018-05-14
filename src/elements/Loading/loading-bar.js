import LoadingBar from './loading-bar.vue'
import Vue from 'vue'

LoadingBar.newInstance = properties => {
  const Instance = new Vue({
    render (h) {
      return h(LoadingBar)
    }
  })

  const component = Instance.$mount()
  document.body.appendChild(component.$el)
  const loadingBar = Instance.$children[0]

  return {
    update (options) {
      if ('percent' in options) {
        loadingBar.$data.percent = options.percent
      }
      if (options.status) {
        loadingBar.$data.status = options.status
      }
      if ('show' in options) {
        loadingBar.$data.show = options.show
      }
    },
    component: loadingBar,
    destroy () {
      document.body.removeChild(document.getElementsByClassName('loading-bar')[0])
    }
  }
}

export default LoadingBar
