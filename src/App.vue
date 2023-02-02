<template>
  <div id="app">
    <span class="svg"></span>
<!--    <img src="@/assets/img/png-file.svg"/>-->
<!--    <svg class="new-icon" style="fill: blue">-->
<!--      <use xlink:href="#download"></use>-->
<!--    </svg>-->
    <svg-icon name="download" color="#fff"></svg-icon>
    <svg-icon name="full-screen" color="#fff"></svg-icon>
  </div>
</template>

<script>
// /* eslint-disable */
// import '@/assets/icon/download.svg'
// import '@/assets/icon/full-screen.svg'
// /* eslint-disable */
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  background: black;
}

.svg{
  display: block;
  width: 16px;
  height: 16px;
  color: white;
  background: url("~@/assets/icon/full-screen.svg") no-repeat;
  background-size: contain;
}

.new-icon{
  width: 16px;
  height: 16px;
  fill: blue;
}
</style>
