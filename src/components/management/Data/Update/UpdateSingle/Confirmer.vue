<template>
  <div v-show="show"  class="modal is-active">

    <div class="modal-background" @click="close"></div>

      <div
        v-show="show"
        class="modal-card animated"
        width="800px"
      >
        <header class="modal-card-head">
          <p class="modal-card-title">
            更新确认
          </p>
          <a class="delete" aria-label="close" @click="close"></a>
        </header>

        <section class="modal-card-body" style="padding: 12px">
    <div slot="content">
      <table class="table is-nowraped is-centered is-fullwidth is-bordered">
        <thead>
          <th>Field</th>
          <th>Old</th>
          <th>Value</th>
        </thead>
        <tbody>
          <tr v-for="field in fields" :key="field.name">
            <td>{{field.title}}</td>
            <td>{{field.$oldValue}}</td>
            <td>{{field.$value}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <Divider height="12px" />

          <a @click="confirm" class="button is-primary" style="margin-right: 0px">Update</a>
          <a class="button" @click="close">Cancel</a>

        </section>

      </div>

  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
    diffs: Array,
    fields: Array
  },

  methods: {
    close () {
      this.$emit('close', false)
    },

    confirm () {
      this.$emit('confirmed')
      this.close()
    }
  }
}
</script>
