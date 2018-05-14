<template>
  <Container paddingless>
    <a class="button is-link">
      导入数据
    </a>
    <a @click="upload.$commit('addData')" class="button">
      添加数据
    </a>
  </Container>
</template>

<script>
export default {
  inject: ['upload']
}
</script>
