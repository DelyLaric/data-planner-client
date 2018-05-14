<template>
  <p :class="['title', 'is-' + level]">
    <slot></slot>
  </p>
</template>

<script>
export default {
  props: {
    level: {
      type: [String, Number],
      default: 4
    }
  }
}
</script>
