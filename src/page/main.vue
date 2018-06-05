<template>
  <div class="home">
    <div class="banner">
      <img src="@/assets/img/7.png" alt="">
    </div>
    <div class="enterprise_concept">
      <div class="title_box">
        <img src="@/assets/img/enterprise_concept_title.png" alt="" class="title">
      </div>
      <div class="img_content">
        <img src="@/assets/img/enterprise_concept_img.png" alt="" style="width: 600px;height: 440px;">
        <div class="content">
          北京基石测评网络技术有限公司是一家专注为高中生选择专业、职业规划、性格测评的科研型企业。基石测评通过研究国内外性格测评技术并在国内研发应用12年以上，创始人团队在12年时间通过为240万以上人才库的模型统计，研发出应用于高中生专业选择的精准潜能测评，致力于帮助高中生深入认知自己、发现自己、帮助他们选择最适合自己的专业，让他们在人生路上少走弯路，为高中生未来的成功奠定基石。
        </div>
      </div>
    </div>
    <div class="idea">
      <img src="@/assets/img/index_wq.png" alt="">
    </div>
    <div class="idea" style="background: #eff0f0;width: 100%;padding: 20px 0">
      <img src="@/assets/img/wqs.png" alt="">
    </div>
    <div class="idea">
      <img src="@/assets/img/jiejue.png" alt="">
    </div>
    <div class="idea">
      <img src="@/assets/img/founder.png" alt="">
    </div>
    <div class="idea">
      <img src="@/assets/img/founders_bak.png" alt="">
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
      align-items: center;
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
      padding: 20px;
      font-size: 16px;
      font-weight: bold;
      text-indent: 2em;
      line-height: 30px;
      background: #f7f7f7;
      text-align: left;
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
