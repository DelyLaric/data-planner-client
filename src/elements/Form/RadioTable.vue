<template>
  <div
    class="table-container is-unselectable"
    :style="{'max-height': height}"
  >
    <table class="table is-hoverable is-centered is-narrow is-bordered is-fullwidth">
      <tbody>
        <tr
          v-for="option in options"
          :key="option.label"
          :class="{'is-hovered': option.value === value}"
          style="cursor: pointer;"
          @click="check(option.value)"
        >
          <td style="text-align: center; width: 1px">
            <Radio
              :checked="option.value === value"
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
      this.$emit('change', value)
    }
  }
}
</script>
