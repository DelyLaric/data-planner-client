<template>
  <Control>
    <label
      :key="key"
      class="radio"
      style="margin-right: 8px"
      v-for="(option, key) in options"
    >
      <input
        type="radio"
        @change="change(option.value)"
        :checked="value === option.value"
      >
      {{option.title}}
    </label>

    <label class="radio" >
      <input
        type="radio"
        @change="change(undefined)"
        :checked="value === undefined"
      >
      不限
    </label>
  </Control>
</template>

<script>
export default {
  props: {
    field: String,
    title: String,
    options: Array,
    value: {
      defaunt: undefined
    }
  },

  methods: {
    change (value) {
      this.$emit('input', value)
    }
  }
}
</script>
