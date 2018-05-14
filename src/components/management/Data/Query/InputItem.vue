<template>
  <Field class="has-addons" style="margin-bottom: 4px">
    <Control>
      <Select :value="value.field" @change="changeField">
        <Option
          v-for="(input, key) in query.optional.items"
          :value="input.field"
          :key="key"
        >{{input.title}}
        </Option>
      </Select>
    </Control>

    <Control>
      <Select v-model="value.operator">
        <Option
          v-for="operator in field.operators"
          :value="operator"
          :key="operator"
        >{{operator}}
        </Option>
      </Select>
    </Control>

    <Control>
      <input class="input" @change="changeValue($event.target.value)" type="text">
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
export default {
  inject: ['query'],

  props: {
    inputs: Array,
    value: Object
  },

  computed: {
    field () {
      for (let i = 0; i < this.query.optional.items.length; i++) {
        if (this.query.optional.items[i].field === this.value.field) {
          return this.query.optional.items[i]
        }
      }

      return false
    }
  },

  methods: {
    changeField (field) {
      // value.field 改变时，处理运算符的正确性
      let { operators } = this.field

      if (operators.indexOf(this.value.operator) === -1) {
        this.value.operator = operators[0]
      }

      this.value.field = field
    },

    changeValue (value) {
      let { type } = this.field
      let input = this.value

      if (value.length === 0) input.value = undefined
      else if (type === 'string') input.value = value
      else if (type === 'number') input.value = value
      // string to number 暂时未实现
    }
  }
}
</script>
