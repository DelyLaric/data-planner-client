<template>
  <Container auto paddingless>
    The Import
    <!-- <IntelliForm :schema="schema" /> -->

    <!-- <ViewSelector />

    <DataView v-show="isCurrentView('data')" class="is-auto" />

    <div style="height: 6px"></div>

    <DataFooter v-show="isCurrentView('data')" />

    <ExcelLoader v-show="isCurrentView('excel') "/> -->
  </Container>
</template>

<script>
// import DataView from './DataView'
// import DataFooter from './DataFooter'
// import ExcelLoader from './ExcelLoader'
// import ViewSelector from './ViewSelector'
import IntelliForm from '@/components/form'

export default {
  components: {
    IntelliForm
  },

  created () {

  }
  // components: {
  //   DataView,
  //   DataFooter,
  //   ExcelLoader,
  //   ViewSelector
  // },

  // inject: ['container'],

  // data () {
  //   return {
  //   }
  // },

  // methods: {
  //   isCurrentView (name) {
  //     return this.container.$state('upload.view') === name
  //   }
  // }
}
</script>
