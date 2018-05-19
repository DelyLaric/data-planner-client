<template>
<div style="position: absolute; height: 100%; width: 100%; background: #fff">
<div class="login-dialog">

  <h1 class="title is-5">系统登录</h1>
  <form>
    <Field>
      <Control hasIconsLeft>
        <input type="text"
          :value="params.username"
          @focus="focused.username = true"
          @blur="handleUsernameBlur($event.target.value)"
          @click="message = false"
          autocomplete="current-password"
          :class="{
            'input': true,
            'is-danger': usernameDanger
          }">
        <Icon name="users" size="small" isLeft />
        <Error v-show="usernameDanger">
          username is required
        </Error>
      </Control>
    </Field>

    <Divider height="12px" />

    <Field>
      <Control hasIconsLeft>
        <input type="password"
          :value="params.password"
          @focus="focused.password = true"
          @blur="handlePasswordBlur($event.target.value)"
          @click="message = false"
          @keyup.enter="submit($event.target.value)"
          autocomplete="current-password"
          :class="{
            'input':true,
            'is-danger': passwordDanger
          }">
        <Icon name="password" size="small" isLeft />
        <Error v-show="passwordDanger">
          password is required
        </Error>
      </Control>
    </Field>
  </form>

  <div style="height: 20px"></div>

  <Button
    @click="submit"
    color="primary"
    :loading="system.$state('isLogging')"
    fullwidth rounded
  >
    登录
  </Button>

  <Error v-show="message"
    style="margin-top: 8px; text-align: center;"
  >
    用户名或密码错误
  </Error>

</div>
</div>
</template>

<script>
export default{
  inject: ['system'],

  data () {
    return {
      params: {
        username: '',
        password: ''
      },

      submitted: false,

      touched: {
        username: false,
        password: false
      },
      focused: {
        username: false,
        password: false
      },

      message: false
    }
  },

  computed: {
    usernameDanger () {
      return (
        (this.touched.username || this.submitted) &&
        !this.params.username && !this.focused.username
      )
    },

    passwordDanger () {
      return (
        (this.touched.password || this.submitted) &&
        !this.params.password && !this.focused.password
      )
    }
  },

  methods: {
    submit (value) {
      this.submitted = true
      this.params.password = value

      if (
        this.passwordDanger ||
        this.usernameDanger
      ) return

      this.login(this.params)
    },

    handleUsernameBlur (value) {
      this.params.username = value
      this.touched.username = true
      this.focused.username = false
    },

    handlePasswordBlur (value) {
      console.log(value)
      this.params.password = value
      this.touched.password = true
      this.focused.password = false
    },

    login (params) {
      this.system.$dispatch('login', params)
    }
  }
}
</script>
