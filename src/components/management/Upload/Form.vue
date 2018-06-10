<template>
  <Container overflowY="auto" padding="6px">
    <UploadField />
    <FieldsMatch />
    <Field>
      <Label>
        <span style="margin-right: 12px">
          重复数据处理
        </span>
        <Radio
          v-for="mode in uploadModes"
          :key="mode.name"
          :label="mode.label"
          :checked="currentUploadMode === mode.name"
          @click="SelectUploadMode(mode.name)"
        />
      </Label>
    </Field>
    <Field>
      <Control>
        <Button
          color="primary"
          :loading="loading"
          @click="handleSubmit"
        >开始上传
        </Button>
      </Control>
    </Field>
  </Container>
</template>

<script>
import {
  filterUniqueData,
  getUniqueDataByList
} from './_public'
import UploadField from './UploadField'
import FieldsMatch from './FieldsMatch'

export default {
  components: {
    FieldsMatch,
    UploadField
  },

  inject: ['container', 'upload', 'uploadSchema'],

  data () {
    return {
      loading: false,
      uploadModes: [
        { name: 'ignore', label: '忽略' },
        { name: 'update', label: '更新' }
      ],

      currentUploadMode: 'ignore'
    }
  },

  methods: {
    SelectUploadMode (name = 'error') {
      this.currentUploadMode = name
    },

    handleSubmit () {
      const uniques = this.uploadSchema.unique
      const columns = this.upload.$state('columns')
      let header = [[], []], uniqueKeys = [], unUniqueKeys = []

      if (!uniques.every(key => {
        return columns.find(column => column.key === key && column.index !== -1)
      })) return

      columns.forEach(column => {
        if (column.index === -1) return

        if (uniques.indexOf(column.key) !== -1) {
          header[0].push(column.key)
          uniqueKeys.push(column.index)
        } else {
          header[1].push(column.key)
          unUniqueKeys.push(column.index)
        }
      })

      header = header.reduce((res, item) => res.concat(item), [])
      let excelData = this.upload.$state('data.excel')

      if (excelData.length === 0) return

      this.loading = true

      setTimeout(async () => {
        try {
          let { uploadData, ignoredData } = filterUniqueData(excelData, uniqueKeys, unUniqueKeys)

          this.upload.$commit('setSuccessData', uploadData)
          this.upload.$commit('setIgnoredData', ignoredData)

          let successData = await this.importData({
            header,
            data: uploadData,
            table: this.uploadSchema.table,
            unique: this.uploadSchema.unique,
            conflict: this.currentUploadMode,
            namespace: this.uploadSchema.namespace
          })

          this.upload.$commit('setSuccessData', successData)
          let conflictData = getUniqueDataByList(excelData, successData, uniqueKeys)
          this.upload.$commit('setErrorData', conflictData)
        } finally {
          this.loading = false
          this.container.$commit('selectUploadView', 'result')
        }
      }, 1)
    },

    async importData (params) {
      let data

      if (params.data.length) {
        data = (await this.$http.post('data/upload', params)).data
      } else data = []

      return data
    }
  }
}
</script>
