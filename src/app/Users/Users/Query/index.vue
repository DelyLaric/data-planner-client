<template>
  <div class="columns is-narrow">

    <Field class="column is-narrow" horizontal>
      <FieldLabel>
        <Label>姓名</Label>
      </FieldLabel>
      <FieldBody>
        <Field>
          <Control>
            <Input
              :value="users.$state('params').name"
              @change="setName"
            />
          </Control>
        </Field>
      </FieldBody>
    </Field>

    <Field class="column is-narrow field" horizontal>
      <FieldLabel size="normal">
        <Label>权&nbsp;&nbsp;限</Label>
      </FieldLabel>
      <FieldBody>
        <Field>
          <Control>
            <Select v-model="users.$state('params').role">
              <Option value="">不限</Option>
              <Option
                v-for="option in dataSource.$state('roles')"
                :key="option.id"
                :value="option.id"
              >{{option.name}}</Option>
            </Select>
          </Control>
        </Field>
      </FieldBody>
    </Field>

    <Field class="field column is-narrow">
      <Control>
        <Button
          color="primary"
          :loading="users.$state('loading')"
          @click="users.$dispatch('getDataSource')"
        >
          查&nbsp;&nbsp;&nbsp;&nbsp;询
        </Button>
      </Control>
    </Field>
  </div>
</template>

<script>
export default {
  inject: ['users', 'dataSource'],

  methods: {
    setName (name) {
      this.users.$commit('setName', name)
    },

    setRole (role) {

    },

    async search () {
      await this.users.$dispatch('getDataSource')
    }
  }
}
</script>
