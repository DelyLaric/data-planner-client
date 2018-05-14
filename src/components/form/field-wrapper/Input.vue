<template>
  <Field>
    <Label>{{title}}</Label>
    <Control>
      <Input
        :value="value"
        :color="color"
        @blur="handleBlur"
        @focus="handleFocus"
      />
    </Control>

    <div v-show="color === 'danger'">
      <Error
        v-for="error in errors"
        :key="error"
      >
        {{error}}
      </Error>
    </div>
  </Field>
</template>

<script>
export default {
  props: {
    field: Object,
    fields: Object,
    validation: {
      type: Boolean,
      default: true
    }
  },

  data () {
    return {
      isFocused: false
    }
  },

  computed: {
    isChanged: {
      get () {
        return this.field._isChanged
      },

      set (val) {
        this.field._isChanged = val
      }
    },

    value () {
      return this.field._value
    },

    default () {
      return this.field._default
    },

    rules () {
      return this.field.rules
    },

    title () {
      return this.field.title
    },

    errors () {
      return this.field._errors.map(error => error.message)
    },

    hasRules () {
      return Boolean(this.field.rules && this.field.rules.length)
    },

    hasErrors () {
      return Boolean(this.field._errors.length)
    },

    hasDefault () {
      return Boolean(this.field._default !== undefined)
    },

    isValidated () {
      return this.field._isValidated
    },

    color () {
      if (this.isFocused) return ''
      if (this.hasErrors) return 'danger'
      if (this.hasDefault && this.isChanged) return 'primary'
      if (!this.isValidated) return ''
    }
  },

  methods: {
    reset,
    initial,
    validate,

    setValue,

    getRuleName,
    getRuleValue,
    getValidationParams,

    handleBlur (value) {
      this.isFocused = false
      this.setValue(value)
    },

    handleFocus (value) {
      this.isFocused = true
    }
  },

  created () {
    this.initial()
    this.reset()
  }
}

// 实现 form 层的方法
function initial () {
  this.field._reset = this.reset
  this.field._validate = this.validate
}

function reset () {
  this.focused = false
  this.field._errors = []
  this.field._isChanged = false
  this.field._isValidated = this.hasDefault
  this.field._value = this.hasDefault ? this.default : ''
}

function setValue (value) {
  if (value === '' && !this.validation) {

  } else if (value === this.default) {
    this.reset()
  } else if (value !== this.value) {
    this.isChanged = true
    this.field._value = value
    this.field._isValidated = false
    if (this.validation) this.validate()
  } else if (!this.isValidated) {
    if (this.validation) this.validate()
  }
}

async function validate () {
  this.field._isValidated = false
  this.field._isLoading = true

  if (this.hasRules) {
    let { data: { errors } } = await this.$http.post(
      'data/validate', this.getValidationParams()
    )
    this.field._errors = errors.map(key => this.field.rules[key])
  }

  this.field._isValidated = true
  this.field._isLoading = false
}

function getValidationParams () {
  return this.rules.map(({name, value}) => ({
    rule: this.getRuleName(name),
    value: this.getRuleValue(value)
  }))
}

function getRuleName (name) {
  let type = typeof name
  if (type === 'string') return name
  else if (type === 'function') {
    return name(transField(this.field), transFields(this.fields))
  } else {
    throw Error('rule must be a string or function')
  }
}

function getRuleValue (value) {
  let type = typeof value
  if (type === 'undefined') return this.value
  else if (type === 'function') {
    return value(transField(this.field), transFields(this.fields))
  } else {
    throw Error(`value must be a function if defined`)
  }
}

function transField (field) {
  return {
    value: field._value,
    default: field._default
  }
}

function transFields (fields) {
  let result = {}
  for (let key in fields) {
    result[key] = {
      value: fields[key]._value,
      default: fields[key]._default
    }
  }

  return result
}
</script>
