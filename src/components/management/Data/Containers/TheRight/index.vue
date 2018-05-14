<template>
  <transition
    appear
    enter-active-class="fadeInRight"
    leave-active-class="fadeOutRight"
  >
    <div
      class="rightbar animated"
      v-show="container.$state('data.rightbar')"
    >
      <TheContainer
        v-for="page in rightbar.pages"
        :title="page.title"
        :module="page.module"
        :key="page.title"
        :page="page"
      />
    </div>
  </transition>
</template>

<script>
import TheContainer from './Container'

export default {
  components: {
    TheContainer
  },

  inject: ['container', 'rightbar']
}
</script>
