<template>
  <div id="app">
    <Boot />
    <router-view/>
  </div>
</template>

<script>
import Boot from '@/app/client/Boot'

export default {
  name: 'App',

  provide () {
    return {
      homepage: this.$getLocalStore('homepage')
    }
  },

  components: {
    Boot
  }
}
</script>
