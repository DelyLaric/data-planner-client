<template>
  <div class="table-container">
    <table class="table is-fullwidth is-hoverable is-centered is-bordered is-nowraped">
      <thead>
        <th>序号</th>
        <th>用户名</th>
        <th>姓名</th>
        <th>权限</th>
        <th>操作</th>
      </thead>
      <tbody>
        <tr v-for="(user, key) in users.$getters('data')" :key="user.id">
          <td>{{user.id}}</td>
          <td>{{user.username}}</td>
          <td>{{user.name}}</td>
          <td>{{user.roles.map(role => role.name).join(' | ')}}</td>
          <td>
            <a @click="select(key)">管理</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  inject: ['container', 'users'],

  methods: {
    select (key) {
      this.selectUser()
      this.users.$commit('select', key)
    },

    selectUser () {
      this.container.$commit('select', {
        view: 'users.manage', name: true
      })
    }
  }
}
</script>
