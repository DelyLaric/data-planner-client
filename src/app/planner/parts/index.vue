<template>
  <Management :schema="schema" />
</template>

<script>
import schema from './schema'
import Management from '@/components/management'

export default {
  components: {
    Management
  },

  data: () => ({
    schema
  })
}
</script>
