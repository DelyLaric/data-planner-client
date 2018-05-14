<template>
  <div
    :class="{
      'modal': true,
      'is-active': container.$state('users.manage')
    }">
    <div class="modal-background" @click="close"></div>
    <div class="modal-card" style="width: 600px">
      <header class="modal-card-head">
        <p class="modal-card-title">用户管理</p>
        <button class="delete" aria-label="close" @click="close"></button>
      </header>
      <section class="modal-card-body">
        <TheUpdate @updated="close"/>
      </section>
    </div>
  </div>
</template>

<script>
import TheUpdate from './Update'

export default {
  components: {
    TheUpdate
  },

  inject: ['container'],

  methods: {
    close () {
      this.container.$commit('close', 'users.manage')
    }
  }
}
</script>
