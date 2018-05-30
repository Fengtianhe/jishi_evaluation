<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="app-footer">
      &copy;北京基石测评网络技术有限公司 All Rights Reserved 京ICP备18025535号
    </div>
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

  .main {
    min-height: 600px;
  }

  .app-footer {
    height: 100px;
    background: #1d1f22;
    line-height: 100px;
    text-align: center;
    color: #666;
  }
</style>
