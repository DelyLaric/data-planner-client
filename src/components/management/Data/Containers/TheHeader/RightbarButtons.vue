<template>
  <ButtonList>
    <ButtonListItem
      v-for="page in rightbar.pages"

      :key="page.title"

      :active="container.$state('data.rightbar') === page.title"

      @click="container.$commit('toggle', {
        view: 'data.rightbar',
        name: page.title
      })"
    >
      {{page.title}}
    </ButtonListItem>
  </ButtonList>
</template>

<script>
export default {
  inject: ['rightbar', 'container']
}
</script>
