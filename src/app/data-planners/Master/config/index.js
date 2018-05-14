import views from './views'
import query from './query'
import upload from './upload'
import rightbar from './rightbar'

export default {
  name: 'master',

  module: {
    key: 'master',
    title: 'master'
  },

  dataSource: {
    view: 'data.master_view',
    url: 'data/master/search'
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
