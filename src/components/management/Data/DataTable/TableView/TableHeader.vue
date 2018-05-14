<template>
  <thead>
    <CollectHeader />
    <th v-for="field in fields"
      :key="field.key"
    >
      {{field.title}}
    </th>
  </thead>
</template>

<script>
import CollectHeader from './CollectHeader'

export default {
  components: {
    CollectHeader
  },

  props: {
    fields: Array
  }
}
</script>
