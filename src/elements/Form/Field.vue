<template>
  <div :class="{
    field: true,
    'is-horizontal': horizontal
  }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    horizontal: {
      type: Boolean,
      default: false
    }
  }
}
</script>
