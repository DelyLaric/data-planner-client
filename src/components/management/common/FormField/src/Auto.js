export default {
  render (h) {},

  inject: ['field', 'dataSource'],

  created () {
    this.field.$value = this.field.value
  }
}
