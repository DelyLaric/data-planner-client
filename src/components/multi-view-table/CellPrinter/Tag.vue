<template>
  <span :class="['tag', 'is-small', 'is-' + color]">
    {{transedValue}}
  </span>
</template>

<script>
export default {
  props: ['map', 'value'],

  computed: {
    option () {
      return this.map[this.value]
    },

    color () {
      return this.option.color
    },

    transedValue () {
      let type = typeof this.option.value
      if (type === 'function') return this.option.value(this.value)
      else if (type === 'undefined') return this.value
      else return this.option.value
    }
  }
}
</script>
