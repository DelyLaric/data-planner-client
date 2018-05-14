<template>
  <div class="field">
    <div class="control">
      <label
        v-for="item in field.items"
        :key="item.value"
        class="radio"
      >
        <input
          type="radio"
          @change="field.$value = item.value"
          :checked="field.$value === item.value"
        >
        {{item.title}}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['page', 'field'],

  created () {
    if (this.page.module === 'create') {
      this.field.$value = this.field.default
    }
  }
}
</script>
