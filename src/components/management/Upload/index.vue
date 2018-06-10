<template>
  <Container auto>
    <UploadForm v-show="currentView === 'form'" />
    <ResultView v-show="currentView === 'result'" />
  </Container>
</template>

<script>
import UploadForm from './Form'
import ResultView from './ResultView'

export default {
  components: {
    ResultView,
    UploadForm
  },

  inject: ['container'],

  computed: {
    currentView () {
      return this.container.$state('upload.view')
    }
  },

  created () {
    this.container.$commit('selectUploadView', 'form')
  }
}
</script>
