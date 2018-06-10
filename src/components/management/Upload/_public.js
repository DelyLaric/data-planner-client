export function filterUniqueData (data, uniqueKeys, unUniqueKeys) {
  let uploadData = []
  let ignoredData = []
  let dataLength = data.length
  let uniqueKeyLength = uniqueKeys.length
  let unUniqueKeyLength = unUniqueKeys.length

  for (let i = 0, j, values, index, isNull; i < dataLength; i++) {
    values = []

    for (j = 0, isNull = false; j < uniqueKeyLength; j++) {
      values.push(data[i][uniqueKeys[j]])
      if (values[j] === '') {
        isNull = true
        break
      }
    }

    if (isNull) {
      ignoredData.push({
        key: i, comment: 'isNull'
      })
      continue
    }

    index = uploadData.findIndex(item => {
      for (j = 0; j < uniqueKeyLength; j++) {
        if (item[j] !== values[j]) return false
      }

      return true
    })

    if (index !== -1) {
      ignoredData.push({
        key: i, comment: ''
      })
      continue
    }

    for (j = 0; j < unUniqueKeyLength; j++) {
      values.push(data[i][unUniqueKeys[j]])
    }

    uploadData.push(values)
  }

  return {
    uploadData,
    ignoredData
  }
}

export function getUniqueDataByList (data, list, uniqueKeys) {
  let result = [...data]

  list.forEach(item => {
    result.splice(data.findIndex(elem => {
      return uniqueKeys.every((key, index) => {
        return item[key] === elem[index]
      })
    }), 1)
  })

  return result
}
