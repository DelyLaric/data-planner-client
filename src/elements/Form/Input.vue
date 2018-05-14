<template>
  <input
    type="text"
    class="input"
    :value="value"
    @input="$emit('input', getValue($event))"
    @change="$emit('change', getValue($event))"
    @blur="$emit('blur', getValue($event))"
    @focus="$emit('focus', getValue($event))"
    :class="[
      'input',
      color === '' ? false : 'is-' + color
    ]"
  >
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: ''
    },

    value: {
      default: ''
    },

    errors: {
      type: Array,
      default: () => ([])
    }
  },

  methods: {
    getValue (event) {
      return event.target.value
    }
  }
}
</script>
