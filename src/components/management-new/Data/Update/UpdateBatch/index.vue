<template>
  <div v-if="data">
    <IntelliForm :schema="schema" :loading="loading"/>

    <Modal v-model="showConfirm">
      <p slot="title">批量更新确认</p>

      <div slot="body">
        该操作将更新
          <span class="tag is-light is-medium">
            {{this.data.length}}
          </span>
        条数据
      </div>

      <div slot="foot">
        <Button
          color="primary"
          :loading="loading"
          @click="updateData"
          style="margin-right: 0px"
        >
          确认更新
        </Button>
        <Button @click="showConfirm = false">
          取消
        </Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import IntelliForm from '@/components/form'

export default {
  components: {
    IntelliForm
  },

  inject: ['formSchema', 'tableSchema', 'dataSource'],

  data: () => ({
    params: [],
    loading: false,
    showConfirm: false
  }),

  computed: {
    data () {
      return this.dataSource.$getters('collectedData')
    },

    schema () {
      return {
        data: {}, // data 用于重置所有字段为空
        fields: this.formSchema.fields,
        submit: {
          title: this.formSchema.title,
          handler: this.handleSubmit
        },
        reset: '重置'
      }
    }
  },

  methods: {
    async handleSubmit (params) {
      this.openConfirm()
      this.setParams(params)
    },

    openConfirm () {
      this.showConfirm = true
    },

    setParams (params) {
      this.params = {
        view: this.tableSchema.dataSource.table,
        namespace: this.formSchema.namespace,
        table: this.formSchema.table,
        data: this.data.map(data => {
          return params.reduce((res, param) => {
            res[param.name] = data[param.name]
            return res
          }, { _id: data._id })
        }),
        columns: params
      }
    },

    closeConfirm () {
      this.showConfirm = false
    },

    async updateData () {
      this.loading = true
      let {data: {data}} = await this.$http.post('data/batch/update', this.params)
      this.dataSource.$commit('updateCollected', data)
      this.loading = false
      this.showConfirm = false
    }
  }
}
</script>
