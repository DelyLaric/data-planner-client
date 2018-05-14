<template>
  <td style="cursor: pointer;" @click="collect">
    <Checkbox :checked="position !== -1" />
  </td>
</template>

<script>
export default {
  inject: ['dataSource'],

  props: {
    index: Number
  },

  computed: {
    collected () {
      return this.dataSource.$state('collected')
    },

    position () {
      return this.collected.indexOf(this.index)
    }
  },

  methods: {
    collect () {
      if (this.position === -1) this.collected.push(this.index)
      else this.collected.splice(this.position, 1)
    }
  }

}
</script>
