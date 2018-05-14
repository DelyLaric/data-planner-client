export function normalize (data, schema) {

}

export function map (result, entities) {
  return mapper => {
    return result.map(key => {
      return mapper(entities[key])
    })
  }
}

export function reduce (result, entities) {
  return (reducer, sum) => {
    return result.reduce(key => {
      return reducer(entities)
    }, sum)
  }
}

export function foreach (result, entities) {
  return callback => {
    let flag
    for (let i = 0, L = result.length; i < L; i++) {
      flag = callback(entities[result[i]], i)
      if (flag !== undefined && !flag) return
    }
  }
}

export function filter (result, entities) {
  return (callback, ...params) => {
    return result.filter(key => {
      return callback(entities[key])
    }, ...params)
  }
}
