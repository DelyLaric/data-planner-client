<template>
  <nav class="pagination">
    <ul class="pagination-list">
      <li>
        <a class="button"
          @click="changePage(page - 1)"
        >
          <Icon name="arrow-left" />
        </a>
      </li>
      <li style="padding-left: 12px; padding-right: 0">
        <span
          style="padding-right: 0; padding-left: 0;"
          class="pagination-ellipsis"
        >{{page}}</span>
      </li>
      <li>
        <span
          style="padding-right: 0; padding-left: 0"
          class="pagination-ellipsis"
        >/</span>
      </li>
      <li>
        <span
          style="padding-left: 0"
          class="pagination-ellipsis"
        >{{lastPage}}</span>
      </li>
      <li>
        <a class="button" @click="changePage(page + 1)">
          <Icon name="arrow-right" />
        </a>
      </li>
      <li style="padding-left: 10px">
        <input
          type="text"
          class="input"
          :value="inputPage"
          @input="inputPage = $event.target.value"
          @keypress.enter="enterPage"
          style="width: 60px; text-align: center; margin-right: 6px"
        >
        <a
          @click="enterPage"
          class="button is-primary"
        >跳转</a>
      </li>
      <li style="margin-left: 12px">
        <span>
          共 {{total}} 条
        </span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['page', 'pageSize', 'total', 'lastPage'],

  data: () => ({
    inputPage: null
  }),

  methods: {
    changePage (key) {
      if (
        key < 1 || key > this.lastPage || key === this.page
      ) return
      this.$emit('change-page', key)
    },

    enterPage (event) {
      if (this.inputPage > this.lastPage) {
        this.inputPage = this.lastPage
      }
      this.changePage(this.inputPage)
      this.inputPage = ''
      event.target.blur()
    }
  }
}
</script>
