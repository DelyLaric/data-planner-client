<template>
  <p class="control">
    <a
      @click="click"
      :style="{'width': width}"
      :class="{
        'button': true,
        'is-link': active,
        'is-focused': focused,
        'is-loading': loading
    }">
      <Icon v-if="icon" :name="icon" />
      <span v-if="$slots.default">
        <slot></slot>
      </span>
      <span v-if="title">
        {{title}}
      </span>
    </a>
  </p>
</template>

<script>
export default {
  props: {
    title: {
      default: false
    },

    active: {
      default: false
    },

    focused: {
      type: Boolean,
      default: false
    },

    loading: {
      type: Boolean,
      default: false
    },

    icon: {
      default: false
    },

    width: {
      default: 'auto'
    }
  },

  methods: {
    click () {
      this.$emit('click', this.menu)
    }
  }
}
</script>
