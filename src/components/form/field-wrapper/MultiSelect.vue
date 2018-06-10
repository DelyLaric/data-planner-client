<template>
  <Field>
    <Label>
      {{field.label}}
    </Label>
    <Control>
      <MultiSelect
        :value="value"
        :options="options"
        @change="setValue"
      />
    </Control>
  </Field>
</template>

<script>
export default {
  props: {
    field: {
      type: Object,
      required: true
    }
  },

  computed: {
    value () {
      return this.field._value
    },

    options () {
      return this.field.options
    },

    default () {
      return this.field._default
    },

    hasDefault () {
      return Boolean(this.field._default !== undefined)
    }
  },

  methods: {
    reset,
    initial,
    setValue
  },

  created () {
    this.initial()
    this.reset()
  }
}

// 实现 form 层的方法
function initial () {
  this.field._reset = this.reset
  this.field._validated = true
}

function reset () {
  this.field._isChanged = !this.hasDefault
  this.field._value = this.hasDefault ? this.default : []
}

function setValue (value) {
  if (isEqual(this.default, value)) {
    this.reset()
  } else if (!isEqual(this.value, value)) {
    this.field._isChanged = true
    this.field._value = value
  }
}

function isEqual (foo, bar) {
  if (typeof foo !== typeof bar) return false
  if (foo.length !== bar.length) return false

  for (let i = 0, L = foo.length; i < L; i++) {
    if (foo[i] !== bar[i]) return false
  }

  return true
}
</script>
