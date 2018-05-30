<template>
  <div class="home">
    <div class="banner">
      <img src="@/assets/img/7.png" alt="">
    </div>
    <div class="idea">
      <img src="@/assets/img/6.png" alt="">
    </div>
    <div class="idea">
      <img src="@/assets/img/founder.png" alt="">
    </div>
    <div class="idea" style="background-image: url(@/assets/img/bg.png)">
      <img src="@/assets/img/founders.png" alt="">
    </div>
    <div class="idea">
      <img src="@/assets/img/4.png" alt="">
    </div>
    <div class="idea">
      <img src="@/assets/img/3.png" alt="">
    </div>
    <div class="idea">
      <img src="@/assets/img/2.png" alt="">
    </div>
    <div class="idea">
      <img src="@/assets/img/1.png" alt="">
    </div>
    <div style="background: white" class="idea">
      <router-link to="/product/product">
        <div
          style="color: #5392f3;background: #f3f4f5;height: 60px;width: 1180px;border-radius: 5px;margin:10px auto;line-height: 60px">
          剩余报告85%，点击查看完整示例，跳转到产品详情页
        </div>
      </router-link>

      <img src="@/assets/img/hzqy.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="scss">
  .home {
    width: 100%;
    img {
      width: 100%;
    }
    .banner {
      height: 450px;
    }
    .idea {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;
    }
  }
</style>
