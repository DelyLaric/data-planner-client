<template>
  <Container class="is-unselectable" bordered padding="6px">
    <Field>
      <Label>
        数据查询
        <a @click="addInput(0)">
          <Icon name="plus" />
        </a>
      </Label>
      <Control class="columns is-narrow">
        <div class="column is-narrow">
          <InputItem
            v-for="(value, key) in inputValues"
            @remove="removeInput(key)"
            :value="value"
            :key="key"
          />
        </div>
      </Control>
    </Field>

    <Field v-if="query.radios.length">
      <Label>状态</Label>
      <Control>
        <RadioItem
          v-for="(item, key) in query.radios"
          v-model="radioValues[key].value"
          :options="item.options"
          :title="item.title"
          :field="item.field"
          :key="key"
        />
      </Control>
    </Field>

      <!-- checkbox 一次绑定一组 fields -->
      <!-- <tbody v-if="query.checkboxes">
        <CheckboxItem
          v-for="(item, key) in query.checkboxes"
          v-model="checkboxValues[key]"
          :title="item.title"
          :items="item.items"
          :key="key"
        />
      </tbody> -->

    <Field>
      <Control>
        <Button
          color="primary"
          @click="search"
        >
          查询
        </Button>
      </Control>
    </Field>

    <!-- 用来测试输入值 -->
    <!-- <tbody v-if="false">
      <tr v-for="(item, key) in toParams" :key="key">
        <td colspan="2">
          {{item.field}}
          {{item.operator}}
          {{item.value}}
        </td>
      </tr>
    </tbody> -->
  </Container>
</template>

<script>
/* eslint-disable */
import RadioItem from './RadioItem'
import InputItem from './InputItem'

export default {
  components: {
    RadioItem,
    InputItem
  },

  inject: ['query', 'dataSource'],

  data () {
    return {
      radioValues: [],
      inputValues: [],
      checkboxValues: []
    }
  },

  computed: {
    toParams () {
      let result = []

      this.checkboxValues.forEach(elem => elem.forEach(item => {
        item.value !== undefined && result.push(item)
      }))

      this.radioValues.forEach(item => {
        item.value !== undefined && result.push(item)
      })

      this.inputValues.forEach(item => {
        item.value !== undefined && result.push(item)
      })

      return result
    }
  },

  methods: {
    addInput (key) {
      if (typeof (key) === 'object') {
        key.forEach(key => this.addInput(key))
        return
      }

      let input = this.query.optional.items[key]

      this.inputValues.push({
        field: input.field,
        operator: input.operators[0],
        value: undefined
      })
    },

    removeInput (key) {
      this.inputValues.splice(key, 1)
    },

    search () {
      this.query.$commit('setQuery', this.toParams)
      this.dataSource.$dispatch('getDataSource')
    }
  },

  created () {
    // 添加基本查询条件
    this.radioValues = this.query.radios.map(item => {
      return { field: item.field, operator: '=', value: undefined }
    })

    this.checkboxValues = this.query.checkboxes.map(elem => {
      return elem.items.map(item => {
        return { field: item.field, operator: '=', value: undefined }
      })
    })

    this.addInput(this.query.optional.default)
  }
}
</script>
