<template>
  <div class="field">
    <label class="label">
      {{field.title}}
    </label>
    <div class="control" style="width: 100%">
      <div
        :class="{
          'select': true,
          'is-info': isActive
        }"
        style="width: 100%"
      >
        <select
          style="width: 100%"
          :value="field.$value"
          @change="change"
          ref="select"
        >
          <option
            v-for="option in options"
            :value="option.value"
            :key="option.value"
          >
            {{option.title}}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { isActive } from './core'

export default {
  inject: ['field', 'page', 'dataSource'],

  computed: {
    isActive
  },

  data () {
    return {
      options: this.field.options.map(option => ({...option}))
    }
  },

  methods: {
    change ({target: {selectedOptions: options}}) {
      this.field.$value = options[0]._value
    }
  },

  created () {
    if (
      this.page.module === 'update' &&
      this.field.$oldValue === undefined
    ) {
      this.options.push({
        value: undefined,
        title: ''
      })
    }
  }
}
</script>
