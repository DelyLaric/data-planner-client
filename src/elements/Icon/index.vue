<template>
  <span :class="[
    'icon', 'has-text-' + color, 'is-' + size
  ]">
    <i :class="['iconfont', 'icon-' + name]" />
  </span>
</template>

<script>
import color from '../_utils/props/color'

export default {
  props: {
    color,

    size: {
      type: String,
      default: 'normal'
    },

    name: {
      name: String,
      required: true,
      default: false
    }
  }
}
</script>
