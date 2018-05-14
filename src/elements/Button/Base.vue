<template>
  <a
    :class="[
      'button',
      'is-' + color,
      'is-' + size,
      loading ? 'is-loading' : false,
      fullwidth ? 'is-fullwidth' : false
    ]"
    :style="{
      'width': width === '' ? false : width
    }"
    @click="$emit('click')"
  >
    <slot></slot>
  </a>
</template>

<script>
import color from '../_utils/props/color'

export default {
  props: {
    color,

    loading: {
      type: Boolean,
      default: false
    },

    width: {
      type: String,
      default: ''
    },

    fullwidth: {
      type: Boolean,
      default: false
    },

    size: {
      type: String,
      default: 'normal'
    }
  }
}
</script>
