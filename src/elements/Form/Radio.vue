<template>
  <label
    @click="$emit('click', value)"
    style="display: inline-block; font-weight: 400;"
    class="is-unselectable"
  >
    <i
      v-if="checked"
      style="color: #20a0ff"
      class="iconfont icon-radio-checked"
      @click="$emit('click-radio')"
    />
    <i
      v-else
      style="color: #c0c0c0"
      class="iconfont icon-radio-unchecked"
      @click="$emit('click-radio')"
    />
    <span v-if="label">
      {{label}}
    </span>
    <slot></slot>
  </label>
</template>

<script>
export default {
  props: {
    checked: {
      type: Boolean,
      default: true
    },

    label: {
      type: String
    },

    value: {}
  }
}
</script>
