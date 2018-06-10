export function chunk (array, size) {
  let res = []
  for (let i = 0, L = array.length; i < L; i += size) {
    res.push(array.slice(i, i + size))
  }

  return res
}
