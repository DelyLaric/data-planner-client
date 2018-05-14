<script>
export default {
  template: '',

  methods: {
    initial,

    handleChange (value) {
      this.field.value = value
    }
  },

  created () {
    this.$set(this.field, 'initial', this.initial)
    this.field.initial()
  }
}

function initial () {
  this.$set(this.field, 'validated', true)
  this.$set(this.field, 'errors', [])
}
</script>
