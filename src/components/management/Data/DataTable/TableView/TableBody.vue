<template>
  <tbody>
    <tr
      @click="dataSource.$commit('select', key)"
      v-for="(data, key) in dataSource.$getters('data')"
      :class="{
        'is-selected': !collected && key === dataSource.$state('selected'),
        'is-hovered': dataSource.$state('collected').indexOf(key) !== -1
      }"
      :key="key"
    >
      <CollectBody :index="key" :key="key"/>
      <td
        v-for="field in fields"
        :key="field.column"
        :style="{
          'padding': field.trans && field.trans.type === 'tag' ? '0' : ''
        }"
      >
        <template v-if="field.trans">
          <ValueTranser
            :trans="field.trans"
            :value="data[field.column]"
          />
        </template>
        <template v-else>
          {{data[field.column]}}
        </template>
      </td>
    </tr>
  </tbody>
</template>

<script>
import ValueTranser from './trans'
import CollectBody from './CollectBody'

export default {
  components: {
    CollectBody,
    ValueTranser
  },

  inject: ['dataSource'],

  computed: {
    collected () {
      return this.dataSource.$state('collected').length > 0
    }
  },

  props: {
    fields: Array
  }
}
</script>
