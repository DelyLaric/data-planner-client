<template>
  <ButtonListItem
    :loading="dataSource.$state('pending')"
    icon="refresh"
    @click="refresh"
  />
</template>

<script>
export default {
  inject: ['dataSource', 'query'],

  methods: {
    refresh () {
      this.query.$commit('initial')
      this.dataSource.$dispatch('getDataSource')
    }
  }
}
</script>
