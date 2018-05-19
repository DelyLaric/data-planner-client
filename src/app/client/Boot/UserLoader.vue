<script>
export default {
  render: () => ({}),

  inject: ['system'],

  created () {
    this.system.$dispatch('getTokenFromStore')
  }
}
</script>
