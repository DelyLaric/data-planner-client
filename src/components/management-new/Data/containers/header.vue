<template>
  <div class="columns">
    <div
      class="column is-narrow"
      style="width: 112px; padding-bottom: 8px"
    >
      <ButtonList>
        <ButtonListItem
          icon="refresh"
          :loading="dataSource.$state('pending')"
          @click="dataSource.$dispatch('refresh')"
        />

        <ButtonListItem
          icon="search"
          :active="container.$state('table.query')"
          @click="container.$commit('toggleTableQuery')"
        />

        <ButtonListItem
          icon="download"
        />
      </ButtonList>
    </div>
    <div class="column is-narrow" style="padding-bottom: 8px">
      <ButtonList>
        <ButtonListItem
          v-for="form in tableSchema.forms"
          :key="form.name"

          :icon="form.icon"
          :title="form.title"
          :active="container.$state('table.rightbar') === form.title"
          @click="container.$commit('toggleTableRightbar', form.title)"
        />
      </ButtonList>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['container', 'dataSource', 'tableSchema']
}
</script>
