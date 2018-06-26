<template>
  <div class="container">
    <div class="product-menu">
      <router-link to="/product/evaluation">
        <img src="@/assets/product/1.jpg" class="menu-nav" :class="{'selected': $route.path === '/product/evaluation'}"/>
      </router-link>
      <router-link to="/product/consultation">
       <img src="@/assets/product/2.jpg" class="menu-nav" :class="{'selected': $route.path === '/product/consultation'}"/>
      </router-link>
      <router-link to="/product/e_and_c">
        <img src="@/assets/product/3.jpg" class="menu-nav" :class="{'selected': $route.path === '/product/e_and_c'}"/>
      </router-link>
      <router-link to="/product/course">
       <img src="@/assets/product/4.jpg" class="menu-nav" :class="{'selected': $route.path === '/product/course'}" />
      </router-link>
    </div>
    <div><router-view></router-view></div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="scss">
  .container{
    width: 100%;
    .product-menu{
      width: 1200px;
      padding: 20px 0;
      margin: 0 auto;
      .menu-nav{
        width:24%;
        opacity: 0.7;
        margin-right: 9px;
      }
      .menu-nav:nth-child(4){margin:0;}
      .menu-nav:hover{
        border: 2px solid rgb(247,101,17);
        opacity: 1;
      }
      .selected{
        border: 2px solid rgb(247,101,17);
        opacity: 1;
      }
    }
  }

</style>
