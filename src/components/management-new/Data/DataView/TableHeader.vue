<template>
  <thead>
    <CollectHeader />
    <th
      v-for="field in fields"
      :key="field.key"
    >
      <span>
        {{field.title}}
      </span>
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
