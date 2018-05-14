<template>
  <Field>
    <Control style="margin-bottom: 8px; padding-left: 2px">
      <label
        v-for="mode in modes"
        class="radio"
        @click="select(mode.name)"
        :key="mode.name"
      >
        <input
          type="radio"
          name="foobar"
          :checked="mode.name === container.$state(view)"
        >
        {{mode.title}}
      </label>
    </Control>
  </Field>
</template>

<script>
const view = 'upload.view'

export default {
  inject: ['container'],

  data () {
    return {
      view,
      modes: [
        { name: 'data', title: '数据' },
        { name: 'excel', title: 'Excel' }
      ]
    }
  },

  methods: {
    select (name) {
      this.container.$commit('select', {
        view, name
      })
    }
  },

  created () {
    this.select(this.modes[0].name)
  }
}
</script>
