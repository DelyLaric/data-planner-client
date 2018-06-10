<template>
  <Container flex column>
    <ViewSelector
      v-if="tableViews.length"
      v-model="currentView"
      :views="tableViews"
    />

    <Container auto>
      <transition-group
        v-show="!loading"
        enter-active-class="fadeIn"
        leave-active-class="fadeOut"
      >
        <div
          class="table-container animated"
          v-if="view.label === currentView"
          v-for="view in tableViews" :key="view.label"
        >
          <table class="table is-fullwidth is-hoverable is-centered is-bordered is-nowraped">
            <thead>
              <td
                v-if="collected"
                class="headcol"
                style="cursor: pointer; width: 24px;"
                @click="handleCollectHeader"
              >
                <Checkbox
                  :minus="isCollectedPart"
                  :checked="isCollectedAll && !isCollectedNull"
                />
              </td>
              <th v-for="field in view.fields" :key="field.key">
                <span>
                  {{field.title}}
                </span>
              </th>
            </thead>

            <tbody>
              <tr v-for="(data, key) in data" :key="key"
                :class="{
                  'is-hovered': collected[key],
                  'is-selected': isCollectedNull && (key === selected)
                }"
                @click="handleSelect(key)"
              >
                <td
                  v-if="collected"
                  style="cursor: pointer; width: 24px"
                  @click="handleCollectBody(key)"
                >
                  <Checkbox :checked="collected[key]" />
                </td>

                <CellPrinter v-for="field in view.fields" :key="field.key"
                  :value="data[field.key]"
                  :trans="field.trans"
                  :data="data"
                />
              </tr>
            </tbody>
          </table>
          </div>
      </transition-group>
    </Container>
  </Container>
</template>

<script>
import ViewSelector from './ViewSelector'
import CellPrinter from './CellPrinter'

export default {
  components: {
    CellPrinter,
    ViewSelector
  },

  props: {
    data: Array,
    columns: Array,
    views: Array,
    loading: Boolean,
    selected: {},
    collected: Array
  },

  data () {
    return {
      currentView: ''
    }
  },

  computed: {
    tableViews () {
      if (this.columns) return [{fields: this.columns}]
      else return this.views
    },

    isCollectedAll () {
      return this.collected && this.collected.every(item => item === true)
    },

    isCollectedNull () {
      return this.collected && this.collected.every(item => item === false)
    },

    isCollectedPart () {
      return !this.isCollectedAll && !this.isCollectedNull
    }
  },

  provide () {
    return {
      emitEvent: (event, payload) => {
        this.$emit(event, payload)
      }
    }
  },

  methods: {
    handleCollectHeader () {
      if (this.isCollectedAll) {
        this.$emit('collect', this.data.map((elem, key) => false))
      } else {
        this.$emit('collect', this.data.map((elem, key) => true))
      }
    },

    handleCollectBody (key) {
      this.$emit('collect', key)
    },

    handleSelect (key) {
      this.$emit('select', key)
    }
  }
}
</script>
