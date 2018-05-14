import views from './views'
import query from './query'
import upload from './upload'
import rightbar from './rightbar'

export default {
  name: 'parts',

  module: {
    key: 'master',
    title: 'master'
  },

  dataSource: {
    view: 'data.parts'
  },

  table: {
    views
  },

  query,

  rightbar: {
    pages: rightbar
  },

  upload
}
