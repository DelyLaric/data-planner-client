<template>
  <Container auto paddingless>
    <ViewSelector />

    <DataView v-show="isCurrentView('data')" class="is-auto" />

    <div style="height: 6px"></div>

    <DataFooter v-show="isCurrentView('data')" />

    <ExcelLoader v-show="isCurrentView('excel') "/>
  </Container>
</template>

<script>
import DataView from './DataView'
import DataFooter from './DataFooter'
import ExcelLoader from './ExcelLoader'
import ViewSelector from './ViewSelector'

export default {
  components: {
    DataView,
    DataFooter,
    ExcelLoader,
    ViewSelector
  },

  inject: ['container'],

  data () {
    return {
    }
  },

  methods: {
    isCurrentView (name) {
      return this.container.$state('upload.view') === name
    }
  }
}
</script>
