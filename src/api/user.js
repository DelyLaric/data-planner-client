import http from '@/core/http'

export async function createUser (columns) {
  let { data } = http.post('user/create', columns)
  return data
}

export async function updateUser (id, columns) {
  let { data } = http.post('user/update', {
    id, columns
  })
  return data
}
