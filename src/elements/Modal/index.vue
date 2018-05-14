<template>
  <div :class="{
    'modal': true,
    'is-active': show
  }">
    <div
      class="modal-background"
      @click="close">
    </div>
      <div
        :width="width"
        class="modal-card animated"
      >
        <header class="modal-card-head">
          <p class="modal-card-title">
            <slot name="title"></slot>
          </p>
          <a
            class="delete"
            aria-label="close"
            @click="close"
          ></a>
        </header>
        <section class="modal-card-body" style="padding: 12px">
          <slot></slot>
          <slot name="body"></slot>
        </section>
        <footer v-if="$slots.foot" class="modal-card-foot">
          <slot name="foot" />
        </footer>
      </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'show',
    event: 'close'
  },

  props: {
    show: Boolean,
    width: {
      type: String,
      default: '800px'
    }
  },

  methods: {
    close () {
      this.$emit('close', false)
    }
  }
}
</script>
