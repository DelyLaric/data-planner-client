<template>
  <IntelliForm :schema="schema"/>
</template>

<script>
import IntelliForm from '@/components/form'

export default {
  inject: ['users', 'dataSource'],

  components: {
    IntelliForm
  },

  computed: {
    user () {
      return this.users.$getters('selectedUser')
    },

    schema () {
      return {
        data: this.user,

        fields: [
          {
            type: 'input', key: 'name',
            label: '姓名', default: user => user.name
          },
          {
            type: 'input', key: 'username',
            label: '用户名', default: user => user.username,
            rules: [
              { name: 'required', message: '用户名不能为空' },
              { name: 'unique:data._system.users,username', message: '用户名已存在' }
            ]
          },
          {
            type: 'multi-select', key: 'roles_id',
            label: '用户权限', default: user => user.roles.map(role => role.id),
            options: this.dataSource.$state('roles').map(role => ({
              value: role.id, label: role.name
            }))
          }
        ],

        submit: {
          label: '更新用户',
          handler: this.handleSubmit
        },

        reset: '重置表单',

        validation: {
          event: 'submit',
          empty: '无更新字段'
        }

      }
    }
  },

  methods: {
    updateUser,

    async handleSubmit (params) {
      let user = await this.updateUser(
        this.user.id,
        params.map(field => ({
          name: field.key,
          value: field.value
        }))
      )
      this.users.$commit('updateSelected', user)
      this.$emit('updated')
    }
  }
}

async function updateUser (id, columns) {
  let {data: {data}} = await this.$http.post('user/update', {
    id, columns
  })

  return data
}
</script>
