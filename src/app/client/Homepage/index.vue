<template>
  <div id="app" class="app">
    <div class="app-header">
      <Topbar />
    </div>

    <div class="app-body">
      <transition
        appear
        enter-active-class="fadeInLeft"
        leave-active-class="fadeOutLeft"
      >
        <div class="app-sidebar animated" v-show="homepage.$state('sidebar')">
          <AppMenus />
        </div>
      </transition>

        <div class="app-main">
          <keep-alive>
            <router-view :key="$route.path"></router-view>
          </keep-alive>
        </div>
    </div>
  </div>
</template>

<script>
import Topbar from './Topbar'
import AppMenus from './Menus'

export default {
  name: 'layout',

  inject: ['homepage'],

  components: {
    Topbar,
    AppMenus
  }
}
</script>
