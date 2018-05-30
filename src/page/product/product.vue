<template>
  <div class="product">
    <div class="detail">
      <div class="img">
        <img src="@/assets/img/product.png" alt="">
      </div>
      <div class="info">
        <div class="title">测评介绍</div>
        <div class="cont">将卡上的饭卡上对方拉黑删掉了发送 i回家 宁可；看到烦恼 镂空设计大方；老师的 当时发生的六块腹肌了；卡上对方；阿克苏那地方</div>
        <div class="bottom">
          <div class="price">限时活动价：¥29.9 ¥99</div>
          <div class="btn">
            <button>立即抢购</button>
          </div>
        </div>
      </div>
    </div>

    <div class="clearHeight">
      测评做完，你将获得一下指导
    </div>

    <div class="img-intro">
      <img src="@/assets/img/p1.png" alt="">
    </div>
    <div class="img-intro">
      <img src="@/assets/img/p2.png" alt="">
    </div>
    <div class="img-intro">
      <img src="@/assets/img/p3.png" alt="">
    </div>
    <div class="img-intro">
      <img src="@/assets/img/p4.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="scss">
  .product {
    width: 100%;
    .detail {
      width: 1200px;
      margin: 20px auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .img {
        img {
          width: 540px;
        }
      }
      .info {
        width: 620px;
        height: 335px;
        background: #ffffff;
        padding: 20px;
        .title {
          text-align: left;
          font-size: 20px;
          font-weight: bolder;
        }
        .cont {
          text-align: left;
          margin: 20px 0 0 0;
          font-size: 12px;
          height: 200px;
        }
        .bottom {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
      }
    }
    .clearHeight {
      font-size: 14px;
      color: #f58506;
      width: 1200px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      margin: 20px auto;
      background: #fff;
    }
    .img-intro {
      width: 1200px;
      margin: 0 auto;
      img {
        width: 100%;
      }
    }
  }
</style>
