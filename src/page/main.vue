<template>
  <div class="home">
    <div class="banner">
      <swiper :options="swiperOption">
        <swiper-slide><img src="@/assets/index/swiper1.png" alt=""></swiper-slide>
        <swiper-slide><img src="@/assets/index/swiper2.png" alt=""></swiper-slide>
        <swiper-slide><img src="@/assets/index/swiper3.png" alt=""></swiper-slide>
        <swiper-slide><img src="@/assets/index/swiper5.png" alt=""></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="banner">
      <img src="@/assets/index/b2.png" alt="">
    </div>
    <div class="banner">
      <img src="@/assets/index/b3.png" alt="">
    </div>
    <div class="banner">
      <img src="@/assets/index/b4.png" alt="">
    </div>
    <div class="banner">
      <img src="@/assets/index/b5.png" alt="">
    </div>
    <div class="banner">
      <img src="@/assets/index/b6.png" alt="">
    </div>
    <div class="banner">
      <img src="@/assets/index/b7.png" alt="">
    </div>
    <div class="banner">
      <img src="@/assets/index/b8.png" alt="">
    </div>
    <div class="banner">
      <img src="@/assets/index/b9.png" alt="">
    </div>
    <div class="banner">
      <img src="@/assets/index/b10.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
      data(){
          return {
            swiperOption: {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                autoplay: true,
                speed: 1000,
                autoplayDisableOnInteraction: false,
                loop: false,
                coverflow: {
                  rotate: 30,
                  stretch: 10,
                  depth: 60,
                  modifier: 2,
                  slideShadows : true
                }
            },
          }
      },
      components: {},
      mounted: function () {

      }

  }
</script>

<style scoped lang="scss">
  .banner {
    img {
      width: 100% !important;
    }
  }

  .enterprise_concept {
    .title_box {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      background: #fff;
      justify-content: center;
      adivgn-items: center;
      height: 175px;
      .title {
        width: 317px;
        height: 65px;
      }
    }
    .img_content {
      display: flex;
      flex-direction: row;
      width: 1200px;
      margin: 0 auto;
    }
    .content {
      padding: 5px 20px;
      font-size: 16px;
      font-weight: bold;
      text-indent: 2em;
      divne-height: 30px;
      background: #f7f7f7;
      text-adivgn: left;
      width: 600px;
    }
  }

  .home {
    width: 100%;
    img {
      width: 1200px;
    }
    .idea {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;
    }
  }
</style>
