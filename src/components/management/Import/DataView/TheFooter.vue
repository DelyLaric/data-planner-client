<template>
  <div>
    <a class="button is-link">
      导入数据
    </a>
    <a @click="upload.$commit('addData')" class="button">
      添加数据
    </a>
  </div>
</template>

<script>
export default {
  inject: ['upload']
}
</script>
