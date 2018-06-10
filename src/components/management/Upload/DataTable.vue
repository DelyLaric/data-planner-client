<template>
  <Container flex column padding="6px">
    <Divider height="12px" />

    <Title level="5" style="margin-bottom: 6px">
      导入失败数据
    </Title>

    <Divider height="12px" />

    <Container auto>
      <div class="table-container">
        <table class="table is-bordered is-centered is-nowraped">
          <thead>
            <th v-for="(head, key) in header" :key="key">
              {{head}}
            </th>
          </thead>
          <tbody>
            <tr v-for="(item, key) in chunkedData[page - 1]" :key="key">
              <td v-for="(cell, key) in item" :key="key">
                {{cell}}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>

    <Divider height="6px" />

    <div>
      <Button
        @click="$emit('close')"
      >
        <Icon name="arrow-double-left" />
        <span>
          返回
        </span>
      </Button>

      <Pagination
        class="is-pulled-right"
        style="margin-right: 0"
        :page="page"
        :last-page="lastPage"
        @change-page="page = $event"
      />

      <Button
        @click="handleDownload"
        style="margin-right: 8px"
      >
        <Icon name="download" />
        <span>导出数据</span>
      </Button>
    </div>
  </Container>
</template>

<script>
import exportCsv from '@/utils/export-csv'
import {chunk} from '@/utils/array'

export default {
  props: {
    header: Array,
    data: Array
  },

  computed: {
    lastPage () {
      return this.chunkedData.length
    },

    total () {
      return this.data.length
    }
  },

  data () {
    return {
      page: 1,
      chunkedData: []
    }
  },

  watch: {
    data: {
      immediate: true,

      handler () {
        this.chunkedData = chunk(this.data, 50)
        this.page = 1
      }
    }
  },

  methods: {
    handleDownload () {
      let rows = [this.header, ...this.data]
      let csvContent = ''
      rows.forEach(row => { csvContent += (row.join(',') + '\r\n') })

      exportCsv.download('重复数据.csv', csvContent)
    }
  }
}
</script>
