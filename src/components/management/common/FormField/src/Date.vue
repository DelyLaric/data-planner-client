<template>
  <div class="field">
    <label class="label">
      {{field.title}}
    </label>
    <div class="field">
      <DatePicker
        @change="change"
        :value="field.$value"
        :class="{'is-active': isActive}"
      />
    </div>
  </div>
</template>

<script>
import { isActive } from './core'

export default {
  inject: ['field', 'page'],

  computed: {
    isActive
  },

  methods: {
    change (val) {
      this.field.$value = val
    }
  }
}
</script>
