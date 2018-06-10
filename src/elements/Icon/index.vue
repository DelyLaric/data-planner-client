<template>
  <span :class="[
    'icon', 'has-text-' + color,
    !isLeft || 'is-left', !isRight || 'is-right'
  ]">
    <i
      :class="['iconfont', 'icon-' + name]"
      :style="{'font-size': size}"
    />
  </span>
</template>

<script>
import color from '../_utils/props/color'

export default {
  props: {
    color,

    size: {
      type: String
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
