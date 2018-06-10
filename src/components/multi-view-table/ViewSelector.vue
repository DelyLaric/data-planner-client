<template>
  <Control
    v-if="views.length > 1"
    class="is-unselectable"
    style="padding: 4px; padding-top: 0; padding-bottom: 8px;"
  >
    <Radio
      style="margin-right: 8px"
      v-for="view in views"
      :key="view.label"
      :checked="currentView === view.label"
      :label="view.label"
      @click="select(view.label)"
    />
  </Control>
</template>

<script>
export default {
  model: {
    prop: 'currentView',
    event: 'select-view'
  },

  props: ['views', 'currentView'],

  methods: {
    select (name) {
      this.$emit('select-view', name)
    }
  },

  created () {
    this.select(this.views[0].label)
  }
}
</script>
