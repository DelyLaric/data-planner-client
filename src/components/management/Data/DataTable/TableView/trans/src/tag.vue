<template>
  <span
    :class="[
      'tag', 'is-' + color, 'is-small'
    ]">
    {{value}}
  </span>
</template>

<script>
export default {
  props: {
    trans: {},
    value: {}
  },

  computed: {
    color () {
      return this.trans.options.find(
        option => option.value === this.value
      ).color
    }
  }
}
</script>
