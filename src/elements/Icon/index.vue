<template>
  <span :class="[
    'icon', 'has-text-' + color, 'is-' + size,
    !isLeft || 'is-left', !isRight || 'is-right'
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

    isLeft: {
      type: Boolean,
      default: false
    },

    isRight: {
      type: Boolean,
      default: false
    },

    name: {
      name: String,
      required: true,
      default: false
    }
  }
}
</script>
