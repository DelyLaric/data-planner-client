<template>
  <div v-show="show">
    <Title>
      {{page.title}}
      <div class="is-pulled-right" style="line-height: 5px">
        <a @click="container.$commit('select', {
          view: 'data.rightbar',
          name: false
        })">
          <Icon name="angle-double-right" />
        </a>
      </div>
    </Title>

    <component
      :is="components[page.module]"
      :test="1234"
    />

  </div>
</template>

<script>
import components from './components'

/*
 * Rightbar 组件框架
 */

export default {
  inject: ['dataSource', 'container'],

  data () {
    return {
      components
    }
  },

  props: {
    page: Object,
    title: String,
    module: String
  },

  provide () {
    return {
      page: this.page
    }
  },

  computed: {
    show () {
      return this.container.$state('data.rightbar') === this.title
    }
  }
}
</script>
