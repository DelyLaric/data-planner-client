<template>
  <component :is="component" />
</template>

<script>
import TheBatch from './UpdateBatch'
import TheSingle from './UpdateSingle'

/*
 * 根据 dataSource 中的 collected
 * 处理 单条更新 与 多条更新
 */

export default {
  inject: ['dataSource'],

  provide () {
    return {
      formSchema: this.formSchema
    }
  },

  props: {
    formSchema: Object
  },

  computed: {
    component () {
      return this.dataSource.$state('collected').length ? TheBatch : TheSingle
    }
  }
}
</script>
