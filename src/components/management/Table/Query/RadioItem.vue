<template>
  <Field class="column is-narrow is-unselectable" horizontal>
    <FieldLabel size="narrow">
      <Label>{{title}}</Label>
    </FieldLabel>
    <Control>
      <Field>
        <Control>
          <Radio
            v-for="option in options"
            :key="option.value"
            :label="option.title"
            @click="change(option.value)"
            :checked="field.value === option.value"
          />
        </Control>
      </Field>
    </Control>
  </Field>
</template>

<script>
/*
 * field: {
 *   name,
 *   title,
 *   value
 * }
 *
 */
export default {
  props: {
    title: String,
    field: Object,
    options: Array
  },

  methods: {
    change (value) {
      this.field.value = value
    }
  }
}
</script>
