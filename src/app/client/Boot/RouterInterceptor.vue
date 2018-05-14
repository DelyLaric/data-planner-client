<script>
import vuex from 'vuex'

const computed = vuex.mapState('system', [
  'token', 'user'
])

const methods = vuex.mapMutations('system', [
  'loadRoutes'
])

function created () {
  this.$router.beforeEach((to, from, next) => {
    if (to.name === 'login') {
      next()
      return
    }

    if (!this.token) {
      next('/login')
    } else {
      next()
    }
  })

  this.loadRoutes()
}

export default {
  created,
  methods,
  computed
}
</script>
