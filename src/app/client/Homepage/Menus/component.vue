<template>
  <ul class="is-unselectable">
    <li>
      <a
        class="menu"
        @click="click"
        @dblclick="toggle"
        :class="{'is-active': route === router.currentRoute.path}"
        :style="{
          'padding-left': 12 + (depth ) * 16 + (icon ? 0 : 20) + 'px'
        }"
      >
        <!-- 菜单图标 -->
        <Icon v-if="icon" :name="icon" size="small" />

        <span style="margin-left: 6px">
          {{title}}
        </span>

        <span v-if="hasChildren" class="is-pulled-right">
          <Icon
            v-show="isExpanding"
            :clickable="true"
            name="arrow-down"
          />

          <Icon
            v-show="!isExpanding"
            :clickable="true"
            name="arrow-up"
          />
        </span>
      </a>
    </li>

    <div v-if="hasChildren" v-show="isExpanding">
      <AppMenu
        v-for="(child, key) in children"
        :key="key"
        :icon="child.icon"
        :title="child.title"
        :route="child.route"
        :depth="depth + 1"
        :expanding="child.expanding"
        :children="child.chilretn"
      >
      </AppMenu>
    </div>
  </ul>
</template>

<script>
export default {
  name: 'AppMenu',

  props: {
    title: {
      type: String,
      required: true
    },

    route: {
      type: String,
      default: ''
    },

    icon: {
      type: String,
      default: ''
    },

    children: {
      type: Array,
      default: () => []
    },

    expanding: {
      type: Boolean,
      default: false
    },

    depth: {
      type: Number,
      default: 0
    }
  },

  data () {
    return {
      isExpanding: this.expanding,

      router: this.$router
    }
  },

  computed: {
    hasChildren () {
      return this.children.length > 0
    },

    hasRoute () {
      return this.route.length > 0
    }
  },

  methods: {
    push () {
      this.$router.push({
        path: this.route
      })
    },

    toggle () {
      this.isExpanding = !this.isExpanding
    },

    click () {
      if (this.route) this.push(this.route)
      else this.isExpanding = !this.isExpanding
    }
  }
}
</script>
