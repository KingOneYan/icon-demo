<template>
  <svg :style="`fill: ${color}`" :width="size" :height="size">
    <use :xlink:href="`#${name}`"></use>
  </svg>
</template>

<script>
export default {
  name: 'svg-icon',
  props: {
    name: {
      type: String,
      required: true,
    },
    color:{
      type: String,
      default: 'currentColor'
    },
    size:{
      type: String,
      default: '16'
    }
  },
}
</script>

<style scoped>

</style>
