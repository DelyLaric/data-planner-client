import buildModule from './builder'

import query from './query'
import upload from './upload'
import dataSource from './dataSource'
import container from './container'

const modules = [
  { name: 'table' },
  { name: 'rightbar' },
  { name: 'query', store: query },
  { name: 'upload', store: upload },
  { name: 'container', store: container },
  { name: 'dataSource', store: dataSource }
]

export default function (config, store) {
  return buildModule(config, modules, store)
}
