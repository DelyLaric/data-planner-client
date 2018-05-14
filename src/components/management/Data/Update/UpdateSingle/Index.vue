<template>
  <div>
    <FormField
      v-for="(item, key) in columns"
      :field="item"
      :key="key"
    />

    <a class="button is-link" @click="click">
      {{page.button}}
    </a>

    <a class="button" @click="reset">
      重置
    </a>

    <TheConfirmer
      :show="showConfirmer"
      :fields="changedColumns"
      @close="showConfirmer = false"
      @confirmed="update"
    />
  </div>
</template>

<script>
import FormField from '../../../common/FormField'
import TheConfirmer from './Confirmer'

export default {
  components: {
    FormField,
    TheConfirmer
  },

  inject: ['dataSource', 'page'],

  data () {
    return {
      showConfirmer: false,

      columns: this.page.columns.map(column => ({
        ...column, $value: undefined, $oldValue: undefined
      })),

      changedColumns: []
    }
  },

  computed: {
    data () {
      return this.dataSource.$getters('selectedData')
    }
  },

  watch: {
    data (val) {
      this.setOldData()
    }
  },

  methods: {
    getParams,
    setOldData,
    getChangedColumns,

    reset () {
      this.getChangedColumns()
      this.changedColumns.forEach(column => {
        column.class !== 'auto' && (
          column.$value = column.$oldValue
        )
      })
    },

    click () {
      this.getChangedColumns()
      this.showConfirmer = true
    },

    async update () {
      let {data: {data}} = await this.$http.post('data/update', this.getParams())
      this.dataSource.$commit('updateSelected', data)
    }
  },

  created () {
    this.setOldData()
  }
}

function setOldData () {
  this.columns.forEach(column => {
    column.$oldValue = this.data[column.name]
    if (column.class === 'auto') return
    column.$value = this.data[column.name]
  })
}

function getParams () {
  return {
    view: this.dataSource.view,
    id: this.data._id,
    table: this.page.table,
    columns: this.changedColumns.map(column => ({
      name: column.name,
      value: column.$value,
      old_value: column.$oldValue
    }))
  }
}

function getChangedColumns () {
  this.changedColumns = this.columns.filter(column =>
    column.$value !== this.data[column.name]
  )
}
</script>
