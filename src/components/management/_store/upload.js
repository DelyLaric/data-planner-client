import { matchStringInArray } from '@/utils/string'

export default {
  namespaced: true,

  state () {
    return {
      'columns': [{
        key: String,
        index: Number,
        title: String,
        header: String
      }],

      'headers': [],

      'data.excel': [],

      'data.upload': [],
      'data.ignored': [],

      'data.success': [],
      'data.error': [],

      'field.matcher': []
    }
  },

  mutations: {
    setColumns (state, columns) {
      state['columns'] = columns
    },

    setHeaders (state, headers) {
      state['headers'] = [...headers]
      state['columns'].forEach(column => {
        column.index = matchStringInArray(headers, column.title)
        if (column.index !== -1) { headers[column.index] = null }
      })
    },

    setExcelData (state, data) {
      state['data.excel'] = data
    },

    setIgnoredData (state, data) {
      state['data.ignored'] = data
    },

    setResultData (state, data) {
      state['data.result'] = data
    },

    setSuccessData (state, data) {
      state['data.success'] = data
    },

    setErrorData (state, data) {
      state['data.error'] = data
    },

    mergeErrorData (state, data) {
      state['data.error'].push(...data)
    }
  }
}
