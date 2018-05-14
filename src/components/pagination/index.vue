<template>
  <Pagination
    :total="meta.total"
    :page="meta.current_page"
    :page-size="meta.per_page"
    :last-page="meta.last_page"
    @change-page="$emit('change-page', $event)"
  />
</template>

<script>
export default {
  props: ['meta']
}
</script>
