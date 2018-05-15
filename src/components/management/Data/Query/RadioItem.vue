<template>
  <Field class="column is-narrow is-unselectable" horizontal>
    <FieldLabel size="narrow">
      <Label>{{title}}</Label>
    </FieldLabel>
    <Control>
      <Field>
        <Control>
          <label
            v-for="option in options"
            :key="option.value"

            class="radio"
            style="margin-right: 8px"
          >
            <input
              type="radio"
              @change="change(option.value)"
              :checked="field.value === option.value"
            >
            {{option.title}}
          </label>
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
