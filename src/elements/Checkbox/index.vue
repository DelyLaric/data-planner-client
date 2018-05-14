<template>
  <span class="icon" style="cursor: pointer;">
    <i v-if="checked"
      @click="$emit('input', true)"
      style="color: #20a0ff"
      class="iconfont icon-check-square"
    ></i>
    <i v-else-if="minus"
      @click="$emit('input', 'minus')"
      style="color: #20a0ff"
      class="iconfont icon-minus-square"
    ></i>
    <i v-else
      @click="$emit('input', false)"
      style="color: #c0c0c0"
      class="iconfont icon-square"
    ></i>
  </span>
</template>

<script>
export default {
  model: {
    prop: 'check',
    event: 'input'
  },

  props: {
    checked: {
      check: Boolean,
      default: false
    },

    minus: {
      type: Boolean,
      default: false
    }
  }
}
</script>
