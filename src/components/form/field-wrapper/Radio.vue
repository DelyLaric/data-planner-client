<template>
  <Field>
    <Label>
      {{label}}
    </Label>
    <Control>
      <RadioTable
        :value="value"
        @change="setValue"
        :options="options"
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

    label () {
      return this.field.label
    },

    options () {
      return this.field.options
    },

    default () {
      return this.field._default
    },

    isChanged () {
      return this.field._isChanged
    },

    hasDefault () {
      return this.field._hasDefault
    },

    defaultOption () {
      return this.options[0].value
    }
  },

  methods: {
    initial () {
      this.field._reset = this.reset
      this.field._validated = true
    },

    reset () {
      this.field._isChanged = !this.hasDefault
      this.field._value = this.hasDefault ? this.default : this.options[0].value
    },

    setValue (value) {
      if (this.default === value) {
        this.reset()
      } else if (this.field._value !== value) {
        this.field._value = value
        this.field._isChanged = true
      }
    }
  },

  created () {
    this.initial()
    this.reset()
  }
}
</script>
