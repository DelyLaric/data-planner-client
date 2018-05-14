<template>
  <div>
    <FormField
      v-for="(item, key) in columns"
      :field="item"
      :key="key"
    />

    <a class="button is-primary" @click="check">
      {{page.button}}
    </a>
  </div>
</template>

<script>
/* eslint-disable */
import FormField from '../../../common/FormField'

export default {
  components: {
    FormField
  },

  inject: ['page', 'dataSource'],

  data () {
    return {
      showConfirmer: false,

      columns: this.page.columns.map(column => ({
        ...column, $value: undefined
      }))
    }
  },

  computed: {
    data,
    params,
    changedColumns
  },

  methods: {
    reset () {
      this.changedColumns.forEach(column => column.$value = undefined)
    },

    clickButton () {
      this.check()
    },

    check () {
      this.update()
    },

    async update () {
      let {data: {data}} = await this.$http.post('data/batch/update', this.params)
      this.dataSource.$commit('updateCollected', data)
      this.reset()
    }
  }
}

function data () {
  return this.dataSource.$getters('collectedData')
}

function changedColumns () {
  return this.columns.filter(column => column.$value !== undefined)
}

function params () {
  return {
    view: this.dataSource.view,
    table: this.page.table,
    data: this.data,
    columns: this.changedColumns.map(column => ({
      name: column.name,
      value: column.$value
    }))
  }
}

/*
function params () {
  let tables = this.tables.map(table => {
    // 处理未更新字段
    let columns = table.columns.filter(column => column.$value !== undefined)

    return {
      name: table.name,

      columns: columns.map(column => {
        return { name: column.name, value: column.$value }
      }),

      data: this.data.map(data => {
        return { id: data._id, columns: columns.map(column => {
          return { name: column.name, value: data[column.field] }
        }) }
      })
    }
  })

  return tables.filter(table => table.columns.length)
}
*/
</script>
