<template>
  <Container flex column
    padding="6px"
    v-show="!loading"
  >
    <Title :level="5" style="margin-bottom: 18px; margin-top: 12px">
      修改纪录
    </Title>

    <div class="is-auto">
      <div class="table-container">
        <table
          class="table is-fullwidth is-hoverable is-centered is-bordered is-nowraped"
        >
          <thead>
            <th>修改者</th>
            <th>修改时间</th>
            <th
              v-for="column in recordSchema.columns"
              :key="column.key"
            >{{column.title}}</th>
          </thead>
          <tbody>
            <tr
              v-for="record in dataSource"
              :key="record._id"
            >
              <td>{{record.operator}}</td>
              <td>{{record.operated_at}}</td>
              <CellPrinter
                v-for="column in recordSchema.columns"
                :key="column.key"
                :value="record.data[column.key]"
                :trans="column.trans"
                :data="record"
              />
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <Divider height="6px" />

    <Button
      width="80px"
      @click="container.$commit('toggleTableRecords')"
    >
      <Icon name="arrow-double-left" />
      <span>返回</span>
    </Button>
  </Container>
</template>

<script>
import CellPrinter from '@/components/multi-view-table/CellPrinter'

export default {
  components: {
    CellPrinter
  },

  inject: ['container', 'recordSchema'],

  data () {
    return {
      table: this.recordSchema.table,
      id: this.container.$state('record.params'),

      dataSource: [],
      loading: false
    }
  },

  async created () {
    this.loading = true

    let {data} = await this.$http.post('data/records/search', {
      table: this.table,
      id: this.id
    })

    this.dataSource = data.map(item => ({
      ...item,
      data: JSON.parse(item.data)
    }))
    this.loading = false
  }
}
</script>
