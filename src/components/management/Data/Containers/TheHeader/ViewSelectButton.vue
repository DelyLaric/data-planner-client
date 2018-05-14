<template>
  <!-- 仅当拥有两张以上的视图开启该功能 -->
  <ButtonListItem
    icon="module"
    v-if="table.views.length > 1"
    :active="container.$state('data.addon') === 'viewSelector'"
    @click="container.$commit('toggle', {
      view: 'data.addon',
      name: 'viewSelector'
    })"
  >
  </ButtonListItem>
</template>

<script>
export default {
  inject: ['table', 'container']
}
</script>
