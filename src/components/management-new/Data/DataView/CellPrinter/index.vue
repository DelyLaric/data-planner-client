<template>
  <td style="padding-top: 0px; padding-bottom: 0px">
    <template v-if="trans">
      <component
        v-for="(schema, key) in trans"
        :key="key"
        :is="components[schema.type]"
        :schema="schema"
        :value="value"
        :data="data"
      />
    </template>
    <span v-else>
      {{value}}
    </span>
  </td>
</template>

<script>
import tag from './Tag'
import records from './Records'

const components = {
  tag,
  records
}

export default {
  props: {
    value: {},
    data: {},
    trans: Array
  },

  data: () => ({
    components
  })
}
</script>
