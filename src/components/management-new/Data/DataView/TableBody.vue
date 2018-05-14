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
      <CellPrinter
        v-for="field in fields"
        :key="field.column"
        :value="data[field.column]"
        :trans="field.trans"
        :data="data"
      />
    </tr>
  </tbody>
</template>

<script>
import CollectBody from './CollectBody'
import CellPrinter from './CellPrinter'

export default {
  components: {
    CellPrinter,
    CollectBody
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
