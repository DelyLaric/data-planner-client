<template>
  <Container padding="12px" width="200px">
    <Title>个人设置</Title>
    <Button fullwidth
      @click="system.$commit('logout')"
      color="danger"
      class="is-outlined"
    >退出登陆
    </Button>
  </Container>
</template>

<script>
export default {
  inject: ['system']
}
</script>
