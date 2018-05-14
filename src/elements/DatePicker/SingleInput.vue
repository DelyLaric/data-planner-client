<template>
  <input
    :class="[
      'input',
      'is-' + color
    ]"
    type="text"
    :placeholder="placeholder"
    :value="value"
  />
</template>

<script>
import BasicInput from './BasicInput'

export default {
  mixins: [BasicInput]
}
</script>
