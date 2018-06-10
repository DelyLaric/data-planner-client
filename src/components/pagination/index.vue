<template>
  <div>
    <Pagination
      class="is-pulled-right"
      style="margin-right: 0"
      :total="meta.total"
      :page="meta.current_page"
      :page-size="meta.per_page"
      :last-page="meta.last_page"
      @change-page="$emit('change-page', $event)"
    />
  </div>
</template>

<script>
export default {
  props: ['meta']
}
</script>
