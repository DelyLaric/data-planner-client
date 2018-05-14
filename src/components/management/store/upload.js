export default {
  namespaced: true,

  state () {
    return {
      dataSet: [],
      blueprint: {}
    }
  },

  mutations: {
    // 必须保证传入的对象后续不再被使用
    addData (state, data = {}) {
      Object.assign(data, state.blueprint)
      state.dataSet.push(data)
    },

    setDataSet (state, dataSet) {
      state.dataSet = dataSet
    },

    removeData (state, key) {
      state.dataSet.splice(key, 1)
    },

    removeAll (state) {
      state.dataSet = []
    },

    batchAddData (state, data) {
      state.dataSet.push(...data)
    },

    setBlueprint (state, columns) {
      columns.forEach(column => {
        state.blueprint[column.name] = undefined
      })
    }
  }
}
