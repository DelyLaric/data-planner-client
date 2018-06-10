<template>
  <table :class="tableClass">
    <thead>
      <th v-for="column in columns">
        {{column.title}}
      </th>
    </thead>

    <tbody>
      <tr v-for="item in data">
        <td v-for="column in columns">
          {{item[column.key]}}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    data: Array,
    columns: Array
  },

  computed: {
    tableClass () {
      return {
        'table': true,
        'is-bordered': true,
        'is-centered': true,
        'is-nowraped': true,
        'is-fullwidth': true
      }
    }
  }
}
</script>
