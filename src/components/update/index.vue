<template>
  <IntelliForm
    :button="button"
    :reset="reset"
    :columns="columns"
    :data="data"
    @submit="handleSubmit"
  />
</template>

<script>
import IntelliForm from '@/components/form'

export default {
  components: {
    IntelliForm
  },

  props: {
    data: {
      type: Object
    },

    button: {
      type: String,
      default: '更新'
    },

    reset: {
      type: String,
      default: '重置'
    },

    columns: {
      type: Array,
      required: true
    }
  },

  methods: {
    async handleSubmit (fields) {
      this.$emit('submit', fields.map(field => ({
        name: field.name,
        value: handleValue(field.value),
        old_value: handleValue(field.default)
      })))
    }
  }
}

function handleValue (value) {
  return typeof value === 'object' ? JSON.stringify(value) : value
}
</script>
