<script>
import container from './_store/container'
import dataSource from './_store/dataSource'
import upload from './_store/upload'

export default {
  template: '<Container><slot></slot></Container>',

  inject: ['schema'],

  data () {
    return {
      namespace: `$auto/planner/${this.schema.namespace}/`
    }
  },

  provide () {
    return {
      upload: this.$createStore(this.namespace + 'upload', upload),
      container: this.$createStore(this.namespace + 'container', container),
      dataSource: this.$createStore(this.namespace + 'dataSource', dataSource)
    }
  },

  beforeDestroy () {
    this.$store.unregisterModule(this.namespace + 'dataSource')
    this.$store.unregisterModule(this.namespace + 'container')
    this.$store.unregisterModule(this.namespace + 'upload')
  }
}
</script>
