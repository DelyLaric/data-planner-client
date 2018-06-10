<template>
  <a
    @click="handleClick"
    class="is-unselectable"
  >历史纪录</a>
</template>

<script>
export default {
  inject: ['emitEvent'],

  props: {
    data: Object,
    event: String,
    label: String
  },

  methods: {
    handleClick () {
      this.emitEvent(this.event, this.data)
    }
  }
}
</script>
