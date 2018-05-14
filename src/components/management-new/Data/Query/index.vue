<template>
  <div>
    <div
      class="table-container"
      style="padding: 12px; max-height: 280px; overflow-x: hidden"
    >
      <Field>
        <Label>
          数据查询
          <a @click="addInput()">
            <Icon name="plus" />
          </a>
        </Label>

        <FieldItem
          v-for="(field, key) in fields"
          @remove="removeField(key)"
          :options="fieldOptions"
          :field="field"
          :key="field.id"
        />
      </Field>

      <div class="columns" v-if="querySchema.radios.length">
        <RadioItem
          v-for="(radio, key) in querySchema.radios"
          :key="key"

          :title="radio.title"

          :field="radios[key]"
          :options="radio.options"
        />
      </div>

      <Field>
        <Control>
          <Button
            color="primary"
            @click="handleClick"
          >
            <Icon name="search" />
            <span>
              查询
            </span>
          </Button>
        </Control>
      </Field>
    </div>
    <Divider height="8px" />
  </div>
</template>

<script>
import RadioItem from './RadioItem'
import FieldItem from './FieldItem'

export default {
  components: {
    RadioItem,
    FieldItem
  },

  inject: ['dataSource', 'querySchema'],

  data () {
    return {
      fields: [],
      fieldOptions: this.querySchema.fields.options,

      radios: this.querySchema.radios.map(item => ({
        name: item.field,
        operator: '=',
        value: undefined
      })),

      serial: 0
    }
  },

  methods: {
    getParams,

    addInput (key = 0) {
      // 递归处理数组情况
      if (Array.isArray(key)) {
        key.forEach(key => this.addInput(key))
        return
      }

      let input = this.fieldOptions[key]

      this.fields.push({
        id: this.serial++,
        value: undefined,
        name: input.field,
        title: input.title,
        operator: input.operators[0]
      })
    },

    removeField (key) {
      this.$delete(this.fields, key)
    },

    handleClick () {
      this.dataSource.$commit('setQuery', this.getParams())
      this.dataSource.$dispatch('refresh')
    }
  },

  created () {
    this.addInput(this.querySchema.fields.default)
  }
}

function getParams () {
  let params = []
  let getter = ({name, operator, value}) => {
    if (value !== undefined) {
      params.push([name, operator, value])
    }
  }

  this.fields.forEach(getter)
  this.radios.forEach(getter)

  return params
}
</script>
