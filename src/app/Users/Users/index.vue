<template>
  <Container flex column
    :show="container.$state('tab') === 'users'"
    v-if="users.$state('loading') !== true"
  >
    <Divider height="20px" v-show="container.$state('tab') !== 'users'" />

    <TheQuery />

    <div class="is-auto">
      <TheTable />
    </div>

    <Divider height="6px"/>

    <TheManage />

    <div style="margin-left: 4px">
      <ThePagination />
    </div>
  </Container>
</template>

<script>
import TheTable from './Table'
import TheQuery from './Query'
import TheManage from './Manage'
import ThePagination from './Pagination'

export default {
  components: {
    TheTable,
    TheQuery,
    TheManage,
    ThePagination
  },

  inject: ['container', 'users']
}
</script>
