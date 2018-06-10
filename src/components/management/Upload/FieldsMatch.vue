<template>
  <Field>
    <Label>表头匹配</Label>
    <Control>
      <div class="table-container">
        <table class="table is-centered is-bordered is-fullwidth is-nowraped">
          <thead>
            <th>字段名</th>
            <th>Excel 表头</th>
            <th>列</th>
          </thead>
          <tbody>
            <tr
              v-for="column in upload.$state('columns')"
              :key="column.key"
            >
              <td>{{column.title}}</td>
              <td>
                <span>
                  {{headers[column.index]}}
                </span>
                <span
                  v-show="headers.length && column.index === -1"
                  class="tag is-warning"
                >
                  未匹配
                </span>
              </td>
              <td>
                <span v-show="column.index !== -1">
                  {{column.index + 1}}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Control>
  </Field>
</template>

<script>
export default {
  inject: ['uploadSchema', 'upload'],

  computed: {
    headers () {
      return this.upload.$state('headers')
    }
  },

  created () {
    let columns = this.uploadSchema.columns.map(column => ({
      index: -1,
      key: column.key,
      title: column.title
    }))

    this.upload.$commit('setColumns', columns)
  }
}
</script>
