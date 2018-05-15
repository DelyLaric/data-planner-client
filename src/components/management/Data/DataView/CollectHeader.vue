<template>
  <td style="cursor: pointer" @click="collect">
    <Checkbox
      :checked="collected.length && collected.length === data.length"
      :minus="collected.length !== 0"
    />
  </td>
</template>

<script>
export default {
  inject: ['dataSource'],

  computed: {
    collected () {
      return this.dataSource.$state('collected')
    },

    data () {
      return this.dataSource.$getters('data')
    }
  },

  methods: {
    collect () {
      if (this.collected.length !== this.data.length) {
        this.dataSource.$commit('collect', this.data.map((elem, key) => {
          return key
        }))
      } else {
        this.dataSource.$commit('collect', [])
      }
    }
  }
}
</script>
