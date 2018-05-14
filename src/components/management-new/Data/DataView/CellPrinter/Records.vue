<template>
  <a
    @click="handleClick"
    class="is-unselectable"
  >历史纪录</a>
</template>

<script>
export default {
  inject: ['container'],

  props: {
    data: Object
  },

  methods: {
    handleClick () {
      this.container.$commit('selectTab', 'records')
      this.container.$commit('setRecordParams', this.data._id)
    }
  }
}
</script>
