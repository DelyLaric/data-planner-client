<template>
  <li
    @click="handle"
    :class="{'is-active': isCurrentTab}"
  >
    <a>
      <span v-if="label">
        {{label}}
      </span>
      <slot></slot>
    </a>
  </li>
</template>

<script>
export default {
  name: 'tab',

  props: {
    value: {
      required: true
    },

    label: {
      type: String
    }
  },

  computed: {
    isCurrentTab () {
      return this.$parent.currentTab === this.value
    }
  },

  methods: {
    handle () {
      this.isCurrentTab || this.$parent.$emit('change', this.value)
    }
  }
}
</script>
