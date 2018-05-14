import trans from './src'

export default {
  render (h) {
    return h(
      trans[this.trans.type],
      {
        props: {
          value: this.value,
          trans: this.trans
        }
      }
    )
  },

  props: {
    value: {},
    trans: Object
  }
}
