<template>
  <div
    style="white-space: nowrap;"
    v-show="container.$state('data.addon')"
  >
    <SelectorContent v-show="isCurrentView('viewSelector')" />
    <QueryContent v-show="isCurrentView('query')" />
  </div>
</template>

<script>
import QueryContent from '../Query'
import SelectorContent from '../ViewSelector'

export default {
  components: {
    QueryContent,
    SelectorContent
  },

  inject: ['container'],

  methods: {
    isCurrentView (view) {
      return this.container.$state('data.addon') === view
    }
  }
}
</script>
