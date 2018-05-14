<template>
  <div class="column-flex-container" style="overflow-y: auto">
    <FileLoader @input="handleData"/>

    <div style="height: 6px"></div>

    <DataTable
      class="flex"
      v-if="headers.length"
      :headers="headers"
      :map="map"
    />

    <div style="height: 8px"></div>

    <a
      @click="addData"
      style="width: 100px"
      v-if="headers.length"
      class="button is-link"
    >添加数据</a>
  </div>
</template>

<script>
import FileLoader from './FileLoader'
import DataTable from './DataTable'

export default {
  components: {
    FileLoader,
    DataTable
  },

  inject: ['container', 'upload'],

  data () {
    return {
      data: [],
      headers: [],

      map: {}
    }
  },

  methods: {
    handleData (data) {
      this.data = data.split('\n')
      this.headers = this.data[0].split(',')
      this.handleColumns()
    },

    handleColumns () {
      let obj = {}
      this.upload.columns.forEach(({title}) => {
        obj[title] = this.headers.indexOf(title)
      })
      this.map = obj
    },

    addData () {
      let key = 0
      this.data.splice(0, 1)

      this.upload.$commit('setDataSet', this.data.map(item => {
        item = item.split(',')
        let obj = {}
        this.upload.columns.forEach(column => {
          key = this.map[column.title]
          if (key > -1) {
            obj[column.name] = item[key]
          }
        })
        return obj
      }))

      this.container.$commit('select', {
        view: 'upload.view', name: 'data'
      })
    }
  }
}
</script>
