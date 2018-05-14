<template>
  <div class="loading-bar" :style="outerStyles" v-show="show" transition="fade">
    <div :class="innerClasses" :style="styles"></div>
  </div>
</template>

<script>
const prefixCls = 'loading-bar'
export default {
  data () {
    return {
      percent: 0,
      color: 'primary',
      failedColor: 'error',
      height: 2,
      status: 'success',
      show: false
    }
  },
  computed: {
    classes () {
      return `${prefixCls}`
    },
    innerClasses () {
      return [
        `${prefixCls}-inner`,
        {
          [`${prefixCls}-inner-color-primary`]: this.color === 'primary' && this.status === 'success',
          [`${prefixCls}-inner-failed-color-error`]: this.failedColor === 'error' && this.status === 'error'
        }
      ]
    },
    outerStyles () {
      return {
        height: `${this.height}px`
      }
    },
    styles () {
      let style = {
        width: `${this.percent}%`,
        height: `${this.height}px`
      }
      if (this.color !== 'primary' && this.status === 'success') {
        style.backgroundColor = this.color
      }
      if (this.failedColor !== 'error' && this.status === 'error') {
        style.backgroundColor = this.failedColor
      }
      return style
    }
  }
}
</script>
