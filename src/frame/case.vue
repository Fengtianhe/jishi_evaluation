<template>
  <div class="container">
    <div class="menu">
      <div class="left_menu">
        <div class="item title">案例</div>
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
      <div class="header">
        <div class="label">{{$route.name}}</div>
        <div class="nav">
          首页>案例>{{$route.name}}
        </div>
      </div>
      <div style="margin-top: 20px">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">

  export default {
    components: {},
    mounted: function () {
      console.log(this.$route)
    }
  }
</script>

<style scoped lang="scss">
  .container {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 1200px;
    .menu {
      width: 320px;
      .left_menu {
        margin-top: 20px;
        width: 320px;
        background: #ffffff;
        .item {
          height: 59px;
          line-height: 60px;
          text-align: center;
          border-bottom: 1px solid #efefef;
          cursor: pointer;
          font-weight: bolder;
          &.title {
            background: #043e87;
            color: #fff;
          }
          &.selected {
            color: #043e87;
          }
        }
      }
    }
    .content {
      margin: 20px 0;
      width: 755px;
      .header {
        border-bottom: 1px solid #043e87;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .label {
          font-weight: bolder;
          color: #043e87;
        }
        .nav {
          color: #666;
        }
      }
    }
  }
</style>
