<template>
  <div class="table-container" style="padding-left: 1px">
    <!-- test
    {{upload.$state('dataSet')}} -->
    <table class="table is-bordered is-nowraped">
      <thead>
        <tr>
          <th
            style="width: 120px"
            v-for="column in upload.columns"
            :key="column.name"
          >
            {{column.title}}
          </th>
          <th>
            <a @click="upload.$commit('removeAll')">
              <Icon name="refresh" />
            </a>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(data, key) in upload.$state('dataSet')"
          :key="key"
        >
          <TableCell
            v-for="column in upload.columns"
            v-model="data[column.name]"
            :key="column.name"
          />
          <td>
            <a @click="upload.$commit('removeData', key)">
              <Icon name="bin" />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import TableCell from './TableCell'

export default {
  components: {
    TableCell
  },

  inject: ['upload'],

  methods: {
    change (val) {

    }
  },

  created () {
    let {$commit, columns} = this.upload
    $commit('setBlueprint', columns)
    $commit('addData')
  }
}
</script>
