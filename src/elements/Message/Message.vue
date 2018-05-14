<template>
  <transition
    appear
    appear-active-class="fadeInDown"
    enter-active-class="fadeInDown"
  >
    <div class="notification animated" v-if="show">

      <div style="display: table-cell; vertical-align: middle">
        <i
          :class="['iconfont', iconType]"
          :style="{'color': iconColor}"
        ></i>

      </div>
      <div style="display: table-cell; padding-left: 16px; vertical-align: middle">
        <p v-if="title">{{title}}</p>
      </div>
    </div>
  </transition>
</template>

<script>
import Vue from 'vue'

export default {
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    title: {
      type: String,
      default: null
    },
    message: String,
    direction: {
      type: String,
      default: 'Right'
    },
    duration: {
      type: Number,
      default: 1500
    },
    container: {
      type: String,
      default: '.notifications'
    }
  },

  data () {
    return {
      $_parent_: null,
      show: true
    }
  },

  computed: {
    transition () {
      return `bounce-${this.direction}`
    },
    enterClass () {
      return `bounceIn${this.direction}`
    },
    leaveClass () {
      return `bounceOut${this.direction}`
    },

    iconType () {
      switch (this.type) {
        case 'success':
          return 'icon-success'
        case 'error':
          return 'icon-fail'
      }
    },

    iconColor () {
      switch (this.type) {
        case 'success':
          return '#19be6b'
        case 'error':
          return '#ed3f14'
      }
    }
  },

  created () {
    let $parent = this.$parent
    if (!$parent) {
      let parent = document.querySelector(this.container)
      if (!parent) {
        // Lazy creating `div.notifications` container.
        const className = this.container.replace('.', '')
        const Notifications = Vue.extend({
          name: 'Notifications',
          render (h) {
            return h('div', {
              'class': {
                [`${className}`]: true
              }
            })
          }
        })
        $parent = new Notifications().$mount()
        document.body.appendChild($parent.$el)
      } else {
        $parent = parent.__vue__
      }
      // Hacked.
      this.$_parent_ = $parent
    }
  },

  mounted () {
    if (this.$_parent_) {
      this.$_parent_.$el.appendChild(this.$el)
      this.$parent = this.$_parent_
      delete this.$_parent_
    }
    if (this.duration > 0) {
      this.timer = setTimeout(() => this.close(), this.duration)
    }
  },

  destroyed () {
    this.$el.remove()
  },

  methods: {
    closedByUser () {
      this.$emit('closed-by-user')
      clearTimeout(this.timer)
      this.show = false
    },
    close () {
      this.$emit('closed-automatically')
      clearTimeout(this.timer)
      this.show = false
    },
    afterLeave () {
      this.$destroy()
    }
  }
}
</script>
