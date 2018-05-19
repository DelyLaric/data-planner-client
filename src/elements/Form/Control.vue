<template>
  <div :class="[
    'control',
    !hasIconsLeft || 'has-icons-left',
    !hasIconsRight || 'has-icons-right'
  ]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    hasIconsLeft: {
      type: Boolean,
      default: false
    },

    hasIconsRight: {
      type: Boolean,
      default: false
    }
  }
}
</script>
