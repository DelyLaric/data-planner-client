<template>
  <IntelliForm :schema="schema" />
</template>

<script>
import IntelliForm from '@/components/form'

export default {
  components: {
    IntelliForm
  },

  inject: ['tableSchema', 'dataSource'],

  props: {
    formSchema: Object
  },

  computed: {
    schema () {
      return {
        fields: this.formSchema.fields,

        submit: {
          label: this.formSchema.submit,
          error: 'fail',
          handler: this.handleSubmit
        },

        reset: '重置',

        validation: {
          event: 'blur'
        }
      }
    }
  },

  methods: {
    async handleSubmit (params) {
      await this.createData(params)
      this.dataSource.$dispatch('refresh')
    },

    async createData (params) {
      await this.$http.post('data/create', {
        view: this.tableSchema.dataSource.table,
        namespace: this.formSchema.namespace,
        table: this.formSchema.table,
        // todo: form-submit-params-name-to-key
        columns: params.map(field => ({
          name: field.key,
          value: field.value
        }))
      })
    }
  }
}
</script>
