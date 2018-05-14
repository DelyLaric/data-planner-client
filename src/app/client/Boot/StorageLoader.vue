<template>

</template>

<script>
import vuex from 'vuex'
import storage from '@/services/storage'

const computed = vuex.mapGetters(
  'system', ['token']
)

const methods = {
  ...vuex.mapMutations('system', [
    'setToken', 'loadStorage'
  ]),

  ...vuex.mapActions('system', [
    'refreshToken'
  ]),

  goLogin () {
    this.$router.replace({name: 'login'})
  }
}

function created () {
  let token = storage.get('token')
  let now = Date.parse(new Date()) / 1000

  if (!token || token.expired_at < now || !token.token) {
    this.goLogin()
    return
  }

  this.loadStorage()
  this.setToken(token.token)

  if (token.refresh_at < now) {
    this.refreshToken()
  }
}

export default {
  created,
  methods,
  computed
}
</script>
