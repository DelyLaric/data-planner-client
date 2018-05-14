import buildModules from './store'
import TheContainer from './Container'

export default {
  render (h) {
    return h(TheContainer)
  },

  props: {
    data: Object
  },

  provide () {
    return buildModules(this.data, this.$store)
  }
}
