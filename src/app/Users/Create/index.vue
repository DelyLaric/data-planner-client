<template>
  <Container
    v-show="container.$state('tab') === 'create'"
    width="500px"
    paddingless
  >
    <IntelliForm
      width="500px"
      :schema="schema"
    />
  </Container>
</template>

<script>
import IntelliForm from '@/components/form'
import { createUser } from '@/api/user'

export default {
  components: {
    IntelliForm
  },

  inject: ['container', 'users', 'dataSource'],

  data () {
    return {
      schema: {
        fields: [
          { class: 'input', name: 'name', title: '姓名', rules: [
            { name: 'required', message: '姓名不能为空' }
          ] },
          { class: 'input', name: 'username', title: '用户名', rules: [
            { name: 'required', message: '用户名不能为空' },
            { name: 'unique:data._system.users,username', message: '用户名已存在' }
          ] },
          { class: 'input', name: 'password', title: '密码', rules: [
            { name: 'required', event: 'blur', message: '密码不能为空' }
          ] },
          {
            class: 'multi-select', name: 'roles_id', title: '用户权限',
            options: this.dataSource.$state('roles').map(role => ({
              value: role.id, title: role.name
            }))
          }
        ],

        submit: {
          title: '创建用户',

          handler: async (params) => {
            let user = await createUser(params)
            this.users.$dispatch('refresh')
            return user
          }
        },

        reset: '重置表单',

        validation: {
          event: 'submit'
        }

      }

    }
  }
}
</script>
