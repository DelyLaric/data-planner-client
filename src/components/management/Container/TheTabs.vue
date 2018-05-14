<template>
  <div class="tabs" style="background-color: #FFF">
    <ul>
      <li
        v-for="tab in tabs"

        :key="tab.name"

        :class="{
          'is-active': container.$state('tab') === tab.name
        }"

        @click="select(tab.name)"
      >
        <a>{{tab.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  inject: ['container'],

  data () {
    return {
      tabs: [
        { name: 'data', title: '数据管理' },
        { name: 'import', title: '数据导入' }
      ]
    }
  },

  methods: {
    select (name) {
      this.container.$commit('select', {
        view: 'tab', name
      })
    }
  },

  created () {
    this.select(this.tabs[0].name)
  }
}
</script>
