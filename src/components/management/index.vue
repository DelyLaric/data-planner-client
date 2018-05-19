<template>
  <Container flex column paddingless>
    <div>
      <Tabs
        :currentTab="currentTab"
        @change="selectTab"
      >
        <TabItem
          v-for="tab in tabs"
          :key="tab.value"
          :value="tab.value"
        >{{tab.label}}
        </TabItem>
      </Tabs>
    </div>

    <div
      class="is-auto"
      v-show="currentTab === 'data'"
    >
      <TheTable />
    </div>
    <div
      class="is-auto"
      v-if="currentTab === 'records'"
    >
      <TheRecords />
    </div>
    <div
      v-show="currentTab === 'import'"
      class="is-auto"
    >
      <TheImport />
    </div>
  </Container>
</template>

<script>
import container from './store/container'
import dataSource from './store/dataSource'

import TheTable from './Data'
import TheImport from './Import'
import TheRecords from './Records'

export default {
  components: {
    TheTable,
    TheImport,
    TheRecords
  },

  props: {
    schema: Object
  },

  provide () {
    return {
      container: this.container,
      dataSource: this.$createStore(this.namespace + 'table', dataSource),

      tableSchema: this.schema.table,
      recordSchema: this.schema.records
    }
  },

  computed: {
    currentTab () {
      return this.container.$state('tab')
    }
  },

  data () {
    const namespace = `$auto/planner/${this.schema.name}/`

    return {
      namespace,
      container: this.$createStore(namespace + 'container', container),

      tabs: [
        { value: 'data', label: '数据管理' }
      ]
    }
  },

  methods: {
    selectTab (name = 'data') {
      this.container.$commit('selectTab', name)
    }
  },

  created () {
    this.selectTab()
  },

  beforeDestroy () {
    this.$store.unregisterModule(this.namespace + 'table')
    this.$store.unregisterModule(this.namespace + 'container')
  }
}
</script>
