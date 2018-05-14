<template>
  <Container flex column paddingless>
    <TheTabs />

    <Divider height="6px"/>

    <Container
      auto
      padding="6px"
      v-if="initialized"
    >
      <TheCreate/>
      <TheUsers />
    </Container>
  </Container>
</template>

<script>
import TheTabs from './Tabs'
import TheUsers from './Users'
import TheCreate from './Create'

export default {
  inject: ['users', 'container', 'dataSource'],

  components: {
    TheTabs,
    TheUsers,
    TheCreate
  },

  computed: {
    initialized () {
      return (
        this.users.$state('initialized') &&
        this.dataSource.$state('initialized')
      )
    }
  },

  created () {
    this.users.$dispatch('initialize')
    this.dataSource.$dispatch('initialize')
  }
}
</script>
