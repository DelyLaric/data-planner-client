// 该组件用于测试 render 函数与 template 编译的效率

export default {
  render (h) {
    return h(
      'tbody',
      {},
      [
        this.dataSource.$getters('data').map(data => h(
          'tr',
          {},
          this.fields.map(field => h(
            'td', {},
            data[field.key]
          ))
        ))
      ]
    )
  },

  inject: ['dataSource'],

  props: {
    fields: Array
  }
}
