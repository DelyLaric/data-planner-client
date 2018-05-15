<template>
  <Control
    v-if="views.length > 1"
    class="is-unselectable"
    style="padding: 4px; padding-top: 0; padding-bottom: 8px"
  >
    <label
      v-for="view in views"
      :key="view.label"
      class="radio"
      @click="select(view.label)"
    >
      <Radio
        :checked="container.$state('table.view') === view.label"
      />
      {{view.label}}
    </label>
  </Control>
</template>

<script>
export default {
  inject: ['container', 'tableSchema'],

  data () {
    return {
      views: this.tableSchema.views
    }
  },

  methods: {
    select (name) {
      this.container.$commit('selectTableView', name)
    }
  },

  created () {
    this.select(this.views[0].label)
  }
}
</script>
