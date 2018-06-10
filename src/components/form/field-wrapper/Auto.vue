<script>
export default {
  render: () => ({}),

  props: {
    field: Object,
    value: {}
  },

  created () {
    this.field._isChanged = true
    this.field._value = this.field.value
  }
}
</script>
