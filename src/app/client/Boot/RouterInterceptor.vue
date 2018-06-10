<script>
export default {
  render: h => ({}),
  inject: ['system'],

  created () {
    this.$router.beforeEach((to, from, next) => {
      // console.log(to)
      if (to.name === 'login') {
        next()
        return
      }

      if (!this.system.$state('isLogged')) {
        next('/login')
      } else {
        next()
      }
    })
  }
}
</script>
