<script>
import TheContainer from './Container'

import users from './store/users'
import dataSource from './store/dataSource'
import container from './store/container'

export default {
  title: '用户管理',

  icon: 'users',

  render (h) {
    return h(TheContainer)
  },

  components: {
    TheContainer
  },

  provide () {
    return {
      users: this.$createStore('users/data', users),
      container: this.$createStore('users/container', container),
      dataSource: this.$createStore('users/dataSource', dataSource)
    }
  }
}
</script>
