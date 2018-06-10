<template>
  <div class="form">
    <component
      v-for="key in dataSource.result"
      :is="components[fields[key].type]"
      :validation="event !== 'submit'"
      :field="fields[key]"
      :fields="fields"
      :key="key"
    />
    <Field>
      <Control>
        <Button
          color="primary"
          :loading="isLoading"
          @click="handleSubmit"
          :class="schema.submit.class"
        >
          {{schema.submit.label}}
        </Button>
        <Button
          v-if="schema.reset"
          @click="handleReset"
        >
          {{schema.reset}}
        </Button>
      </Control>
      <Error v-if="state['error.empty']">
        {{schema.validation && schema.validation.empty}}
      </Error>
    </Field>
  </div>
</template>

<script>
import components from './field-wrapper/_index'
import { foreach, map, filter } from '@/utils/normalizer'

export default {
  props: {
    schema: {
      type: Object,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    data () {
      return this.schema.data
    },

    fields () {
      return this.dataSource.fields
    },

    validation () {
      return this.schema.validation
    },

    event () {
      return this.schema.validation && this.schema.validation.event
    },

    isLoading () {
      if (this.loading) return true
      if (this.state['submit.loading']) return true
      for (let key in this.dataSource.fields) {
        if (this.dataSource.fields[key]._isLoading) return true
      }

      return false
    },

    mapFields () {
      return map(this.dataSource.result, this.dataSource.fields)
    },

    filterFields () {
      return filter(this.dataSource.result, this.dataSource.fields)
    },

    foreachFields () {
      return foreach(this.dataSource.result, this.dataSource.fields)
    }
  },

  watch: {
    'schema.data': [
      {
        handler () {
          this.handleReset()
        },
        immediate: true
      }
    ]
  },

  data () {
    return {
      dataSource: getDataSource(this.schema),
      components,
      state: {
        'error.empty': false,
        'submit.loading': false
      }
    }
  },

  methods: {
    getDefault,
    getSubmitParams,

    resetForm,
    resetField,

    hasErrorField,

    valueHandler,

    handleReset () {
      this.resetForm()
      this.resetField()
    },

    async handleSubmit () {
      // 并发处理所有表单的 validate
      await Promise.all(this.mapFields(async field => {
        console.log(field)
        if (!field._isValidated) {
          await field._validate()
        }
      }))

      if (this.hasErrorField()) return

      let fields = this.getSubmitParams()
      if (fields.length) {
        this.state['error.empty'] = false
        this.state['submit.loading'] = true
        await this.schema.submit.handler(fields)
        this.state['submit.loading'] = false
      } else {
        this.state['error.empty'] = true
      }
    }
  }
}

// vue.methods

function resetForm () {
  this.state['error.empty'] = false
}

// 处理默认值同步，以及重置表单状态
// 重置函数 field.reset 必须由子组件提供
function resetField () {
  this.foreachFields(field => {
    field._hasDefault = Boolean(this.data)
    field._hasData = Boolean(this.data)
    field._default = this.getDefault(field.default)
    field._reset && field._reset()
  })
}

/*
 * pipeline of get default value
 */

function getDefault (value) {
  let type = typeof value

  if (type === 'undefined') return undefined
  else if (type === 'function') return value(this.data)
  else return value
}

function hasErrorField () {
  let result = false

  this.foreachFields(field => {
    result = field._errors.length
    if (result) return false
  })

  return result
}

// pure function

function wrapFieldProps (field) {
  return {
    _errors: [],
    _reset: undefined,
    _value: undefined,
    _default: undefined,
    _validate: undefined,
    _isChanged: false,
    _isValidated: true,
    _isLoading: false,
    _hasDefault: false,
    _hasData: false,
    ...field
  }
}

function getDataSource (schema) {
  let fields = {}
  let result = schema.fields.map(field => field.key)

  result.forEach((name, key) => {
    fields[name] = wrapFieldProps(schema.fields[key])
  })

  return {
    result,
    fields
  }
}

function getSubmitParams () {
  return this.filterFields(field => {
    return field._isChanged
  }).map(name => {
    let field = this.dataSource.fields[name]
    return {
      key: field.key,
      value: this.valueHandler(field._value),
      old_value: this.valueHandler(field._default)
    }
  })
}

function valueHandler (value) {
  // 处理 null 为 object 的诡异设计
  if (value === null) return null
  let type = typeof value
  return type === 'object' ? JSON.stringify(value) : value
}
</script>
