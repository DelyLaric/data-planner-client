export default function () {
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
        handler (params) {
          this.createUser(params)
        }
      },

      reset: '重置表单',

      validation: {
        event: 'submit'
      }

    }
  }
}
