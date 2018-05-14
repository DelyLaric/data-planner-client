<template>
  <div :style="{'height': height === '' ? false : height}"/>
</template>

<script>
export default {
  props: {
    height: {
      type: String,
      default: ''
    }
  }
}
</script>
