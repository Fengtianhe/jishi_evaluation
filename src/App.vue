<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import HeaderComponent from '@/frame/header.vue'

  export default {
    components: {
      HeaderComponent
    }
  }
</script>

<style lang="scss">
  @import "style/_style.scss";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
