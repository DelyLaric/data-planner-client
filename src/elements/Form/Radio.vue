<template>
  <i
    v-if="checked"
    class="iconfont icon-radio-checked"
    style="color: #20a0ff"
  />
  <i
    v-else
    class="iconfont icon-radio-unchecked"
    style="color: #c0c0c0"
  />
</template>

<script>
export default {
  props: {
    checked: {
      type: Boolean,
      default: true
    }
  }
}
</script>
