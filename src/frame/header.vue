<template>
  <div class="top-bar">
    <div class="top">
      <img class="img left" src="@/assets/bar_02.gif">
      <div class="bar-font left">科学的识人方式</div>
      <ul class="left  bar-right">
        <li :class="{'selected': $route.path==='/'}">
          <router-link to="/">首页</router-link>
        </li>
        <li :class="{'selected':$route.matched && $route.matched[0] && $route.matched[0].path==='/product'}">
          <router-link to="/product/product">产品</router-link>
        </li>
        <li :class="{'selected': $route.matched && $route.matched[0] && $route.matched[0].path==='/case'}">
          <router-link to="/case/enterprise">案例</router-link>
        </li>
        <li :class="{'selected': $route.matched && $route.matched[0] && $route.matched[0].path==='/news'}">
          <router-link to="/news/news">文章</router-link>
        </li>
        <li style="width: 90px">
          <a href="">联系我们</a>
        </li>
      </ul>
      <div class="bar-name left">
        <img class="img-right  left " src="@/assets/bar_03_03.gif">
        <span class="name  left">Pony</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted: function () {
      console.log(this.$route)
    }
  }
</script>

<style scoped lang="scss">
  .top-bar {
    width: 100%;
    background: #fff;
  }

  .top {
    width: 1100px;
    height: 60px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .img {
    display: block;
  }

  .bar-font {
    margin-left: 10px;
    line-height: 60px;
    color: #000;

  }

  .bar-right {
    margin-left: 340px;
    list-style: none;
  }

  .bar-right a {
    display: block;
    width: 76px;
    height: 60px;
    text-decoration: none;
    line-height: 60px;
    color: #000;
  }

  .bar-right li {
    float: left;
    display: block;
    width: 76px;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }

  /*.bar-right li a:hover {*/
  /*float: left;*/
  /*display: block;*/
  /*width: 76px;*/
  /*height: 60px;*/
  /*line-height: 60px;*/
  /*background: #146fc3;*/
  /*color: #fff;*/
  /*text-align: center;*/
  /*}*/

  .bar-right li.selected {
    float: left;
    display: block;
    width: 76px;
    height: 60px;
    line-height: 60px;
    background: #146fc3;
    color: #fff;
    text-align: center;
    a {
      color: #fff
    }
  }

  .bar-name {
    margin-left: 10px;
  }

  .img-right {
    display: block;
    margin-top: 10px;
  }

  .name {
    display: block;
    line-height: 60px;
  }
</style>
