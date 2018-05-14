<template>
  <div
    :class="[
      'select',
      fullwidth ? 'is-fullwidth' : false,
      color ? 'is-' + color : false
    ]"
  >
    <select
      :style="{
        'width': width ? width : false
      }"
      :value="value"
      @change="$emit('change', $event.target.selectedOptions[0]._value)"
    >
      <slot></slot>
    </select>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'change'
  },

  props: {
    value: {
      default: ''
    },

    color: {
      type: String,
      default: ''
    },

    fullwidth: {
      type: Boolean,
      default: false
    },

    width: {
      type: String
    }
  }
}
</script>
