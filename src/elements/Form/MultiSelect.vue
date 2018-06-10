<template>
  <div
    class="table-container is-unselectable"
    :style="{'max-height': height}"
  >
    <table class="table is-hoverable is-centered is-narrow is-bordered is-fullwidth">
      <thead>
        <th></th>
        <th>选项</th>
      </thead>
      <tbody>
        <tr
          v-for="option in options"
          :key="option.label"
          :class="{'is-hovered': value.indexOf(option.value) !== -1}"
          style="cursor: pointer;"
          @click="check(option.value)"
        >
          <td style="width: 1px">
            <Checkbox
              :checked="value.indexOf(option.value) !== -1"
            />
          </td>
          <td>
            {{option.label}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'change'
  },

  props: {
    value: Array,

    options: Array,

    height: {
      type: String,
      default: '500px'
    }
  },

  methods: {
    check (value) {
      let data = [...this.value]
      let key = this.value.indexOf(value)

      if (key === -1) data.push(value)
      else data.splice(key, 1)

      this.$emit('change', data)
    }
  }
}
</script>
