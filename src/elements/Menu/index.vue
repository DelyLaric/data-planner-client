<template>
  <ul class="is-unselectable">
    <li>
      <a
        @click="click"
        @dblclick="toggle"
        :class="{'is-active': route === currentRoute}"
        :style="{
          'padding-left': indent + 16 + 'px',
          'cursor': 'default'
        }"
      >
        <!-- 菜单图标 -->

        <Icon :name="icon" />

        {{name}}

        <span
          v-if="children"
          class="icon is-small is-pulled-right"
          style="cursor: pointer"
          @click="toggle"
        >
          <i v-if="expanded" class="iconfont icon-arrow-down"></i>
          <i v-else class="iconfont icon-arrow-up"></i>
        </span>
      </a>
    </li>
    <div v-show="expanded">
      <slot></slot>
    </div>
  </ul>
</template>

<script>
export default {
  props: {
    name: String,

    title: String,

    route: String,

    icon: {
      type: String,
      default: ''
    },

    children: {
      type: Boolean,
      default: false
    },

    expanding: {
      type: Boolean,
      default: false
    },

    indent: {
      type: [Number, String],
      default: 0
    }
  },

  data () {
    return {
      expanded: this.expanding
    }
  },

  computed: {
    currentRoute () {
      return this.$router.currentRoute.path
    }
  },

  methods: {
    push () {
      this.$router.push({
        path: this.route
      })
    },

    toggle () {
      if (this.route) this.expanded = !this.expanded
    },

    click () {
      if (this.route) this.push(this.route)
      else this.expanded = !this.expanded
    }
  }
}
</script>
