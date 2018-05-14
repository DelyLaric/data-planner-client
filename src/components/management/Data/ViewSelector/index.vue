<template>
  <div
    v-if="table.views.length > 1"
    style="padding: 4px;"
    class="control"
  >
    <label
      v-for="view in table.views"
      :key="view.title"
      class="radio"
    >
      <input
        type="radio"
        @click="select(view.title)"
        :checked="container.$state('data.table.view') === view.title"
      >
      {{view.title}}
    </label>

    <Divider height="4px" />
  </div>
</template>

<script>
export default {
  inject: ['table', 'container'],

  methods: {
    select (name) {
      this.container.$commit('select', {
        view: 'data.table.view',
        name: name
      })
    }
  },

  created () {
    this.select(this.table.views[0].title)
  }
}
</script>
