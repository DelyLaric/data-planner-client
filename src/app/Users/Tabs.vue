<template>
  <Tabs
    @change="changeTab"
    :currentTab="container.$state('tab')"
  >
    <TabItem
      v-for="tab in tabs"
      :label="tab.label"
      :value="tab.value"
      :key="tab.value"
    />
  </Tabs>
</template>

<script>
export default {
  inject: ['container'],

  data () {
    return {
      tabs: [
        { value: 'users', label: '用户管理' },
        { value: 'create', label: '创建用户' }
      ]
    }
  },

  methods: {
    changeTab (name) {
      this.container.$commit('select', {
        view: 'tab', name
      })
    }
  },

  created () {
    this.changeTab(this.tabs[0].value)
  }
}
</script>
