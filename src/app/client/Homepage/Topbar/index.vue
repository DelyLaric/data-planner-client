<template>
  <div>
    <a
      style="margin-left: 4px"
      @click="homepage.$commit('toggleSidebar')"
    >
      <span class="icon is-small">
        <i class="iconfont icon-menu"></i>
      </span>
      <span>&nbsp;</span>
    </a>
  </div>
</template>

<script>
export default {
  inject: ['homepage']
}
</script>
