<template>
  <ButtonListItem
    icon="search"
    :active="container.$state('data.addon') === 'query'"
    @click="container.$commit('toggle', {
      view: 'data.addon',
      name: 'query'
    })"
  >
  </ButtonListItem>
</template>

<script>
export default {
  inject: ['container']
}
</script>
