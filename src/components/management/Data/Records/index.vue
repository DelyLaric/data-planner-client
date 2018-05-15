<template>
  <Modal
    :show="container.$state('records') && !pending"
    @close="container.$commit('toggleRecordView')"
  >
    <p slot="title">历史纪录</p>
    <div style="width: 100%; overflow: auto">
      <table class="table is-nowraped is-centered is-fullwidth is-bordered">
        <thead>
          <th
            v-for="(item, key) in dataSource[0]"
            :key="key"
          >
            {{key}}
          </th>
        </thead>
        <tbody>
          <tr
            v-for="data in dataSource"
            :key="data._id"
          >
            <td v-for="(value, key) in data" :key="key">
              {{value}}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <a slot="foot" class="button" @click="container.$commit('toggleRecordView')">
      取消
    </a>
  </Modal>
</template>

<script>
export default {
  inject: ['container'],

  data: () => ({
    pending: false,
    dataSource: []
  }),

  computed: {
    table () {
      return this.container.$state('records.params').table
    },

    id () {
      return this.container.$state('records.params').id
    }
  },

  methods: {
    async getRecords () {
      this.pending = true
      let {data} = await this.$http.post('data/records/search', {
        table: this.table,
        id: this.id
      })
      this.dataSource = data.map(data => JSON.parse(data.data))
      this.pending = false
    }
  },

  created () {
    this.getRecords()
  }
}
</script>
