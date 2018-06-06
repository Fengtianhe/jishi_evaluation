<template>
  <div class="product">
    <div class="detail">
      <div class="img">
        <img src="@/assets/img/product.png" alt="">
      </div>
      <div class="info">
        <div class="title">测评介绍</div>
        <div class="cont">
          在外部条件给定的前提下，一个人能否成功，关键在于能否准确认知并全力发挥其天生优势——天赋和性格。
          基石高中生专业选择测评通过对高中生性格、天赋、行为风格、兴趣等多维度精准分析，利用各行、各业、各岗位的企业用人标准及能力素质模型的大数据精准匹配最能发挥其个人优势与潜能的专业，帮助高中生规划适合自己的职业方向。
        </div>
        <div class="bottom">
          <div class="price">
            限时活动价：¥985.00
            <br>
            <span class="origin_price">¥1980.00</span>
          </div>
          <div class="btn">
            <button @click="xcx_qr_dialog = true">立即抢购</button>
          </div>
        </div>
      </div>
    </div>

    <div class="clearHeight">
      测评做完，你将获得以下指导
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

    <el-dialog :visible.sync="xcx_qr_dialog">
      <img src="@/assets/img/xcx.png" alt="">
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        xcx_qr_dialog: false
      }
    }
  }
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
          height: 335px;
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
          height: 200px;
          line-height: 30px;
          font-weight: bolder;
        }
        .bottom {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .price {
            text-align: left;
            .origin_price {
              text-decoration: line-through;
            }
          }
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
