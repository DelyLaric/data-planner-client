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
      <div
        v-show="form.title === container.$state('table.rightbar')"
        v-for="form in tableSchema.forms"
        :key="form.title"
      >
        <Title>
          {{form.title}}
          <div class="is-pulled-right" style="line-height: 5px">
            <a @click="container.$commit('toggleTableRightbar', false)">
              <Icon name="arrow-double-right" />
            </a>
          </div>
        </Title>
        <component
          :is="components[form.type]"
          :view="tableSchema.dataSource.table"
          :formSchema="form"
        />
      </div>
    </div>
  </transition>
</template>

<script>
import create from './Create'
import update from './Update'

export default {
  data: () => ({
    components: {
      create,
      update
    }
  }),

  inject: ['container', 'tableSchema']
}
</script>
