<template>
  <table class="table is-hoverable is-centered is-bordered is-nowraped">
    <TableHeader :fields="view.fields" />
    <TableBody :fields="view.fields" />
  </table>
</template>

<script>
import TableBody from './TableBody'
import TableHeader from './TableHeader'

export default {
  components: {
    TableBody,
    TableHeader
  },

  inject: ['table'],

  props: {
    view: Object
  }
}
</script>
