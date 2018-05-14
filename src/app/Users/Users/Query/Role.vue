<template>
  <div class="column is-narrow field is-horizontal">
    <FieldLabel size="normal">
      <Label>权&nbsp;&nbsp;限</Label>
    </FieldLabel>
    <FieldBody>
      <Field>
        <Control>
          <Select v-model="users.$state('params').role">
            <Option :value="undefined">
              全部
            </Option>
          </Select>
        </Control>
      </Field>
    </FieldBody>
  </div>
</template>

<script>
export default {
  inject: ['dataSource', 'users'],

  created () {
    console.log(this.dataSource.$state('roles'))
  }
}
</script>
