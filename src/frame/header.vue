<template>
  <div class="top-bar">
    <div class="top">
      <router-link to="/">
        <img class="img left" src="@/assets/img/logo.png" style="height: 60px">
      </router-link>

      <div class="bar-name right">
        <router-link to="/person/test_card" v-if='showAvatar()'>
          <img class="img-right  left " src="@/assets/img/bar_03_03.gif">
          <span class="name  left">Pony</span>
        </router-link>

        <div v-else class="login_btn">
          <div @click="show_login_dialog()">登陆</div>
        </div>
      </div>

      <ul class="right  bar-right">
        <li :class="{'selected': $route.path==='/' && !contact_dialog}">
          <router-link to="/">首页</router-link>
        </li>
        <li
          :class="{'selected':$route.matched && $route.matched[0] && $route.matched[0].path==='/product' && !contact_dialog}">
          <router-link to="/product/product">产品</router-link>
        </li>
        <li
          :class="{'selected': $route.matched && $route.matched[0] && $route.matched[0].path==='/case' && !contact_dialog}">
          <router-link to="/case/enterprise">案例</router-link>
        </li>
        <li
          :class="{'selected': $route.matched && $route.matched[0] && $route.matched[0].path==='/news' && !contact_dialog}">
          <router-link to="/news/news">文章</router-link>
        </li>
        <li style="width: 90px;cursor: pointer" @click="contact_dialog = !contact_dialog"
            :class="{'selected':contact_dialog}">
          联系我们
        </li>
      </ul>
    </div>

    <div class="dialog" v-if="contact_dialog">
      <div class="main">
        <div class="qrs">
          <div class="qr">
            <img src="@/assets/img/gzh.png" alt="">
            <div>微信扫描关注我们的服务号 <br> 获取最新咨询</div>
          </div>
          <div class="qr">
            <img src="@/assets/img/xcx.png" alt="">
            <div>使用我们的小程序 <br> 测评购买报告查看</div>
          </div>
          <div class="qr">
            <img src="@/assets/img/kf.png" alt="">
            <div>客服微信号 <br> 问题随时问</div>
          </div>
        </div>
        <div class="call">
          <img src="@/assets/img/icon_phone.png" alt="">
          <div>全国免费热线：400-101-9859</div>
          <div>地址：北京市朝阳区立水桥北方明珠大厦2911</div>
        </div>
      </div>
    </div>

    <el-dialog :visible.sync="login_dialog" class="login_dialog" width="250px" :show-close="false">
      <img src="@/assets/img/qr.png" alt="">
    </el-dialog>

    <div id="login_container"></div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        contact_dialog: false,
        login_dialog: false
      }
    },
    mounted: function () {
    },
    watch: {
      '$route.path': function (val) {
        this.contact_dialog = false
      }
    },
    methods: {
      show_login_dialog: function () {
        const redirectUri = 'www.jishiceping.com/#/person/test_card'
        const appId = 'wx047532f5c0c4273a'
        // const obj = new WxLogin({
        //   id: 'login_container',// div的id
        //   appid: 'wx42b0c68b40525f96',
        //   scope: 'snsapi_base',// 写死
        //   redirect_uri: encodeURI(redirectUri),
        //   state: '',
        //   style: 'black',// 二维码黑白风格
        //   // href: 'https://某个域名下的css文件'
        // })
        // console.log(obj)
        const url = `https://open.weixin.qq.com/connect/qrconnect?appid=${appId}&redirect_uri=${redirectUri}&response_type=code&scope=snsapi_login#wechat_redirect`
        window.location = url
      },
      showAvatar: function () {
        return window.localStorage.getItem('open_id')
      }
    }
  }
</script>

<style scoped lang="scss">
  .top-bar {
    width: 100%;
    background: #fff;
  }

  .top {
    width: 1200px;
    height: 60px;
    margin: 0 auto;
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
    list-style: none;
    margin-right: 30px;
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
    width: 100px;
    margin-left: 10px;
    line-height: 60px;
  }

  .img-right {
    display: block;
    margin-top: 10px;
  }

  .name {
    display: block;
    line-height: 60px;
  }

  .dialog {
    width: 100%;
    height: 300px;
    position: absolute;
    .main {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      .qrs {
        width: 900px;
        height: 300px;
        display: flex;
        flex-direction: row;
        .qr {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          width: 300px;
          background: #fff;
          img {
            width: 175px;
            height: 175px;
          }
        }
      }
      .call {
        width: 300px;
        height: 300px;
        background: #126abd;
        color: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        img {
          width: 140px;
          height: 140px;
        }
      }
    }
  }

  .login_btn {
    cursor: pointer;
  }

  .impowerBox .qrcode {
    width: 200px;
  }

  .impowerBox .title {
    display: none;
  }

  .impowerBox .info {
    width: 200px;
  }

  .status_icon {
    display: none
  }

  .impowerBox .status {
    text-align: center;
  }
</style>
