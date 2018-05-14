<template>
  <Container flex column paddingless>
    <TheTabs />

    <Container auto flex column padding="6px">
      <TheData class="animated" v-show="isCurrentView('data')" />

      <TheImport class="animated" v-show="isCurrentView('import')" />
    </Container>
  </Container>
</template>

<script>
import TheTransition from './Transition'
import TheTabs from './TheTabs'
import TheData from '../Data'
import TheImport from '../Import'

export default {
  components: {
    TheTabs,
    TheData,
    TheImport,
    TheTransition
  },

  inject: ['container'],

  methods: {
    isCurrentView (name) {
      return this.container.$state('tab') === name
    }
  }
}
</script>
