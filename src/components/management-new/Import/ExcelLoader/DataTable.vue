<template>
  <div class="table-container" style="max-width: 800px">
    <table class="table is-fullwidth is-centered is-nowraped is-bordered">
      <thead>
        <tr>
          <th>Excel 表头</th>
          <th>目标字段</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="column in upload.columns"
          :key="column.title"
        >
          <td>
            {{getHeader(column.title)}}
          </td>
          <td>{{column.title}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  inject: ['upload'],

  props: {
    headers: Array,
    map: Object
  },

  methods: {
    getHeader (title) {
      let key = this.map[title]
      return key > -1 ? this.headers[key] : ''
    }
  }
}
</script>
