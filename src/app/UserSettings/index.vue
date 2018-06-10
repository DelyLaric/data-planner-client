<template>
  <Container padding="12px">
    <Title>个人设置</Title>
    <Field>
      <Control>
        <Button
          width="200px"
          color="danger"
          class="is-outlined"
          @click="system.$commit('logout')"
        >退出登陆
        </Button>
      </Control>
    </Field>
  </Container>
</template>

<script>
import TheControl from './control'

export default {
  components: {
    TheControl
  },

  inject: ['system'],

  data () {
    return {
      value: 'Y',
      options: [
        { label: 'Y', value: 'Y' },
        { label: 'N', value: 'N' }
      ]
    }
  }
}
</script>
