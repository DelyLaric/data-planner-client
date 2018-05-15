<template>
  <div v-if="data">
    <IntelliForm :schema="schema" :loading="loading"/>

    <Modal v-model="showConfirm">
      <p slot="title">更新确认</p>

      <table class="table is-nowraped is-centered is-fullwidth is-bordered">
        <thead>
          <th>字段</th>
          <th>修改前</th>
          <th>修改后</th>
        </thead>
        <tbody>
          <tr
            v-for="field in confirmFields"
            :key="field.name"
          >
            <td>{{field.title}}</td>
            <td>{{field.old_value}}</td>
            <td>{{field.value}}</td>
          </tr>
        </tbody>
      </table>

      <Button
        slot="foot"
        color="primary"
        :loading="loading"
        @click="updateData"
        style="margin-right: 0px"
      >
        确认更新
      </Button>
      <Button
        slot="foot"
        style="margin-left: 8px"
        @click="showConfirm = false"
      >
        取消
      </Button>
    </Modal>
  </div>
</template>

<script>
import IntelliForm from '@/components/form'

export default {
  components: {
    IntelliForm
  },

  inject: ['tableSchema', 'formSchema', 'dataSource'],

  data: () => ({
    params: [],
    loading: false,
    confirmFields: [],
    showConfirm: false
  }),

  computed: {
    schema () {
      return {
        data: this.data,
        fields: this.formSchema.fields,
        submit: {
          title: this.formSchema.title,
          handler: this.handleSubmit
        },
        reset: '重置',
        validation: {
          event: 'submit'
        }
      }
    },

    data () {
      return this.dataSource.$getters('selectedData')
    }
  },

  methods: {
    async handleSubmit (params) {
      this.showConfirm = true
      this.params = params
      this.getConfirmFields()
    },

    getConfirmFields () {
      this.confirmFields = this.params.reduce((res, param) => {
        let field = this.formSchema.fields.find(field => field.name === param.name)
        res.push({
          name: param.name,
          title: field.title,
          value: param.value,
          old_value: param.old_value
        })
        return res
      }, [])
      this.showConfirm = true
    },

    async updateData () {
      this.loading = true
      this.showConfirm = false
      let {data: {data}} = await this.$http.post('data/update', {
        view: this.tableSchema.dataSource.table,
        table: this.formSchema.table,
        namespace: this.formSchema.namespace,
        id: this.data._id,
        columns: this.params
      })
      this.dataSource.$commit('updateSelected', data)
      this.loading = false
    }
  }
}
</script>
