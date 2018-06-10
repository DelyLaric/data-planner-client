<template>
  <Container flex column paddingless>
    <Tabs
      @change="selectTab"
      :currentTab="currentTab"
    >
      <TabItem
        v-for="tab in tabs"
        :key="tab.name"
        :value="tab.name"
        :label="tab.label"
      />
    </Tabs>

    <Container auto
      v-for="tab in tabs"
      :key="tab.name"
      :show="currentTab === tab.name"
    >
      <component :is="tab.component"/>
    </Container>
    <!-- <div
      class="is-auto"
      v-show="currentTab === 'table'"
    >
      <Container v-show="!container.$state('table.records')">
        <TheTable />
      </Container>

      <Container v-if="container.$state('table.records')">
        <TheRecords />
      </Container>
    </div>

    <div
      v-show="currentTab === 'upload'"
      class="is-auto"
    >
      <TheUpload />
    </div> -->
  </Container>
</template>

<script>
import TheTable from './Table'
import TheUpload from './Upload'

export default {
  components: {
    TheTable,
    TheUpload
  },

  inject: ['container'],

  computed: {
    currentTab () {
      return this.container.$state('tab')
    }
  },

  data () {
    return {
      tabs: [
        { name: 'table', label: '数据管理', component: TheTable },
        { name: 'upload', label: '数据导入', component: TheUpload }
      ]
    }
  },

  methods: {
    selectTab (name = 'table') {
      this.container.$commit('selectTab', name)
    }
  },

  created () {
    this.selectTab()
  }
}
</script>
