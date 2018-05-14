<template>
  <td
    class="is-editable is-error"
    v-text="value"
    @blur="change($event.target.innerText, $event)"
  />
</template>

<script>
export default {
  props: {
    value: {},
    column: Object
  },

  data () {
    return {
      valid: true
    }
  },

  methods: {
    change (value) {
      this.input(value)
    },

    input (value) {
      this.$emit('input', value)
    },

    check () {

    }
  },

  created () {
    this.check()
  }
}
</script>
