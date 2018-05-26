<template>
  <div class="container">
    <div class="menu">
      <div class="left_menu">
        <router-link to="/case/enterprise">
          <div class="item" :class="{'selected': $route.path === '/case/enterprise'}">企业案例</div>
        </router-link>
        <router-link to="/case/individual">
          <div class="item" :class="{'selected': $route.path === '/case/individual'}">个人案例</div>
        </router-link>
        <router-link to="/case/education">
          <div class="item" :class="{'selected': $route.path === '/case/education'}">授课案例</div>
        </router-link>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/javascript">

  export default {
    components: {},
    mounted: function () {

    }
  }
</script>

<style scoped lang="scss">
  .container {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    width: 1200px;
    .menu {
      width: 140px;
      .left_menu {
        margin-top: 20px;
        width: 140px;
        background: #ffffff;
        .item {
          height: 59px;
          line-height: 60px;
          text-align: center;
          border-bottom: 1px solid #efefef;
          cursor: pointer;
          &.selected {
            background: #3b86cc;
            color: #fff;
          }
        }
      }
    }
    .content {
      margin-left: 20px;
      width: 1020px;
    }
  }
</style>
