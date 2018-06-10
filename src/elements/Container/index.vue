<template>
  <div
    :class="[
      'content-container',
      auto ? 'is-auto' : false,
      flex ? 'is-flex' : false,
      column ? 'is-column' : false,
      !show ? 'is-hidden' : false,
      bordered ? 'is-bordered': false,
      unselectable ? 'is-unselectable' : false
    ]"
    :style="{
      'padding': paddingless ? false : padding,
      'width': width === '' ? '100%' : width,
      'height': height === '' ? '100%' : height,
      'overflow-x': overflowX,
      'overflow-y': overflowY
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    paddingless: {
      type: Boolean,
      default: false
    },

    width: {
      type: String,
      default: ''
    },

    height: {
      type: String,
      default: ''
    },

    padding: {
      type: String,
      default: '0px'
    },

    flex: {
      type: Boolean,
      default: false
    },

    column: {
      type: Boolean,
      default: false
    },

    auto: {
      type: Boolean,
      default: false
    },

    unselectable: {
      type: Boolean,
      default: false
    },

    bordered: {
      type: Boolean,
      default: false
    },

    overflowX: {
      type: String,
      default: 'hidden'
    },

    overflowY: {
      type: String,
      default: 'hidden'
    },

    background: {
      type: String,
      default: '#fff'
    },

    show: {
      type: Boolean,
      default: true
    }
  }
}
</script>
