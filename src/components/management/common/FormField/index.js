import fields from './components'

/*
 * 管道组件
 * field 对象将以 props 的方式进入管道
 * 并流出到由 field.class 所对应的组件中
 * 组件将以 inject.field 的方式获得上下文
 */

export default {
  render (h) {
    return h(fields[this.field.class])
  },

  props: {
    value: Object,

    field: Object
  },

  provide () {
    return {
      field: this.field
    }
  }
}
