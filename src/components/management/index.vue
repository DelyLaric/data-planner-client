<script>
import StoreManager from './StoreManager'
import ViewManager from './ViewManager'

export default {
  template: '<StoreManager><ViewManager/></StoreManager>',

  components: {
    ViewManager,
    StoreManager
  },

  props: ['schema'],

  data () {
    return {
      namespace: `$auto/planner/${this.schema.namespace}/`
    }
  },

  provide () {
    return {
      schema: this.schema,
      tableSchema: this.schema.table,
      uploadSchema: this.schema.upload,
      recordSchema: this.schema.records
    }
  }
}
</script>
