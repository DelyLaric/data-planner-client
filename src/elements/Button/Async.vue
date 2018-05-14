<template>
  <Button
    :color="color"
    :loading="loading"
    @click="handle"
  >
    <slot></slot>
  </Button>
</template>

<script>
export default {
  props: {
    color: String,

    callback: Function
  },

  data: () => ({
    loading: false
  }),

  methods: {
    async handle () {
      this.loading = true
      try {
        await this.callback()
      } finally {
        this.loading = false
        this.$emit('completed')
      }
    }
  }
}
</script>
