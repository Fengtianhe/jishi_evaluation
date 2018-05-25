<template>
  <div class="container">
    <div class="menu">
      <div class="avatar">
        <img
          src="@/assets/avatar.png"
          alt="eeee">
        <div class="name_text">Pony</div>
      </div>
      <div class="left_menu">
        <router-link to="/person/message">
          <div class="item" :class="{'selected': $route.path === '/person/message'}">我的消息</div>
        </router-link>
        <router-link to="/person/message">
          <div class="item">我的报告</div>
        </router-link>
        <router-link to="/person/test_card">
          <div class="item" :class="{'selected': $route.path === '/person/test_card'}">我的测评卡</div>
        </router-link>
        <router-link to="/person/invited">
          <div class="item" :class="{'selected': $route.path === '/person/invited'}">我邀请的</div>
        </router-link>
        <router-link to="/person/message">
          <div class="item">设置</div>
        </router-link>
      </div>
      <div class="logout">
        退出登录
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/javascript">
  import HeaderComponent from '@/frame/header.vue'

  export default {
    components: {
      HeaderComponent
    },
    mounted: function () {

    }
  }
</script>

<style scoped lang="scss">
  .container {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    .menu {
      width: 300px;
      .avatar {
        height: 260px;
        background: #ffffff;
        border-radius: 10px;
        img {
          margin-top: 40px;
          width: 120px;
          height: 120px;
          border-radius: 60px;
        }
        .name_text {
          margin-top: 40px;
          font-size: 16px;
          font-weight: bolder;
        }
      }
      .left_menu {
        margin-top: 20px;
        width: 300px;
        height: 300px;
        border-radius: 10px;
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
          &:first-child {
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
          }
          &:last-child {
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
          }
        }
      }
      .logout {
        border-radius: 10px;
        margin-top: 20px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        background: #fff;
        width: 100%;
        color: #fe1313;
        cursor: pointer;
      }
    }
    .content {
      margin-left: 20px;
      width: 860px;
    }
  }
</style>
