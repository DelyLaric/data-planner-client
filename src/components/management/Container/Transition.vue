<template>
  <transition
    appear
    enter-active-class="fadeIn"
    leave-active-class="fadeOut"
  >
    <slot></slot>
  </transition>
</template>

<script>
export default {

}
</script>
