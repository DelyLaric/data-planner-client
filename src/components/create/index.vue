<template>
  <IntelliForm
    :button="button"
    :columns="columns"
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
    button: {
      type: String,
      required: true
    },

    columns: {
      type: Array,
      required: true
    }
  },

  data () {
    return {
      loading: false
    }
  },

  methods: {
    getParams,

    async handleSubmit (params) {
      this.$emit('submit', this.getParams())
    },

    handleReset () {
      this.columns.forEach(column => column.initial())
    }
  }
}

function getParams () {
  let changedColumns = this.columns.filter(column => column.value !== '')
  return changedColumns.map(column => ({
    name: column.name,
    value: column.value
  }))
}
</script>
