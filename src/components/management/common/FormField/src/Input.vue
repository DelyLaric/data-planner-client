<template>
  <div class="field">
    <label class="label">
      {{field.title}}
    </label>
    <div class="control">
      <input
        @change="change($event.target.value)"
        :value="field.$value"
        type="text"
        :class="{
          'input': true,
          'is-info': isActive
        }"
      >
    </div>
  </div>
</template>

<script>
export default {
  inject: ['field', 'page', 'dataSource'],

  computed: {
    isActive () {
      if (
        (this.page.module === 'update') &&
        (this.field.$value !== this.field.$oldValue)
      ) return true

      return false
    }
  },

  methods: {
    change (value) {
      this.field.$value = undefined
      if (this.field.type === 'number') {
        this.field.$value = parseInt(value)
      } else {
        this.field.$value = value
      }
    }
  }
}
</script>
