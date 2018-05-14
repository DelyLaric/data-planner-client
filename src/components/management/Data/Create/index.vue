<template>
  <div>
    <FormField
      v-for="(field, key) in columns"
      :field="field"
      :key="key"
    />

    <a class="button is-primary" @click="submit">
      {{page.button}}
    </a>

    <div>

    </div>
  </div>
</template>

<script>
import FormField from '../../common/FormField'

export default {
  components: {
    FormField
  },

  inject: ['page', 'dataSource'],

  props: {
    test: {}
  },

  data () {
    return {
      columns: this.page.columns.map(column => ({
        ...column, $value: undefined
      }))
    }
  },

  computed: {
    params,
    changedColumns
  },

  methods: {
    async submit () {
      let {data: {data}} = await this.$http.post('data/create', this.params)

      this.dataSource.$commit('unshiftData', data)
    }
  }
}

function changedColumns () {
  return this.columns.filter(column => column.$value !== undefined)
}

function params () {
  return {
    view: this.dataSource.view,
    table: this.page.table,
    columns: this.changedColumns.map(column => ({
      name: column.name,
      value: column.$value
    }))
  }
}

</script>
