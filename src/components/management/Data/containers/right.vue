<template>
  <transition
    appear
    enter-active-class="fadeInRight"
    leave-active-class="fadeOutRight"
  >
    <div
      class="rightbar animated"
      v-show="container.$state('table.rightbar')"
    >
      <Container paddingless
        v-show="form.title === container.$state('table.rightbar')"
        v-for="form in tableSchema.forms"
        :key="form.title"
      >
        <Title>
          {{form.title}}
          <div class="is-pulled-right" style="line-height: 5px">
            <a @click="container.$commit('toggleTableRightbar', false)">
              <Icon name="angle-double-right" />
            </a>
          </div>
        </Title>
        <component
          :is="components[form.type]"
          :view="tableSchema.dataSource.table"
          :formSchema="form"
        />
      </Container>
    </div>
  </transition>
</template>

<script>
import create from '../Create'
import update from '../Update'

const components = {
  create,
  update
}

export default {
  data: () => ({
    components
  }),

  inject: ['container', 'tableSchema']
}
</script>
