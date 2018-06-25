<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <div class="main">
      <router-view></router-view>
      <div class="banner">
        <img src="@/assets/index/b11.png" alt="" width="100%">
      </div>
    </div>
    <div class="app-footer">
      &copy;北京基石测评网络技术有限公司 All Rights Reserved 京ICP备18025535号-1
    </div>
  </div>
</template>
<script type="text/javascript" charset="utf-8" async src="http://lxbjs.baidu.com/lxb.js?sid=12157630"></script>
<script>
  import HeaderComponent from '@/frame/header.vue'

  export default {
    components: {
      HeaderComponent
    },
    mounted: function () {
      //o3ny05PvLra8OLBKMIOdDmt7Qbz4
      localStorage.setItem('open_id', '')
    }
  }


  // 百度统计
  var _hmt = _hmt || [];
  (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?e44d0e63c75f995fbb88e059f8cad49f";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
  })();
  //360统计
  (function (b, a, e, h, f, c, g, s) {
      b[h] = b[h] || function () {
          (b[h].c = b[h].c || []).push(arguments)
      }
      b[h].s = !!c
      g = a.getElementsByTagName(e)[0]
      s = a.createElement(e)
      s.src = `//s.union.360.cn/${f}.js`
      s.defer = !0
      s.async = !0
      g.parentNode.insertBefore(s, g)
  })(window, document, 'script', '_qha', 263959, false)

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
