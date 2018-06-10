<template>
  <td style="padding-top: 0px; padding-bottom: 0px">
    <template v-if="trans">
      <component v-for="(schema, key) in trans" :key="key"
        :is="components[schema.type]"
        v-bind="schema"
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
import link from './link'

const components = {
  tag,
  link
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
