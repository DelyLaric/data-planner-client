<template>
  <Field class="has-addons">
    <Control>
      <Select
        :value="field.name"
        @change="changeField"
      >
        <Option
          v-for="(option, key) in options"
          :value="option.field"
          :key="key"
        >{{option.title}}
        </Option>
      </Select>
    </Control>

    <Control>
      <Select
        width="80px"
        :value="field.operator"
        @change="field.operator = $event"
      >
        <Option
          v-for="operator in option.operators"
          :value="operator"
          :key="operator"
        >{{operator}}
        </Option>
      </Select>
    </Control>

    <Control>
      <Input
        type="text"
        class="input"
        @change="changeValue"
      />
    </Control>

    <Control>
      <Button
        @click="$emit('remove')"
      >
        <Icon color="danger" name="close"/>
      </Button>
    </Control>
  </Field>
</template>

<script>
/* 参数格式
 * options: [
 *   { class: '' field: '', title: '', operators: [] }
 * ]
 *
 * field: {
 *   name: '' // option.field  !!!!! important !!!!!
 *   operator: option.operators[key]
 *   value: ''
 * }
*/
export default {
  props: {
    field: Object,
    options: Array
  },

  computed: {
    option () {
      return this.options.find(option => option.field === this.field.name)
    }
  },

  methods: {
    changeField (field) {
      this.field.name = field

      // 当 field.name 改变时，确保 field.operator 被支持
      if (!this.findOperator(this.option.operators)) {
        this.field.operator = this.option.operators[0]
      }

      // this.value.field = field
    },

    findOperator (operators) {
      return operators.indexOf(this.field.operator) !== -1
    },

    changeValue (value) {
      if (value.length === 0) this.field.value = undefined
      else this.field.value = value
    }
  }
}
</script>
