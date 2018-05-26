<template>
  <div class="education-detail">
    <div class="detail-box">

    </div>

    <div class="other">
      <div class="header">
        <div class="line"></div>
        其他案例
        <div class="line"></div>
      </div>
      <div class="other-list">
        <div class="item" v-for="n in 4">
          <div class="logo">
            <img src="" alt="">
          </div>
          <div class="text">
            李大钊 《史观》：“至于﹝历史进展﹞动因何在
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="scss">
  .education-detail {
    background: #fff;
    width: 950px;
    margin-top: 20px;
    padding: 50px;
    .detail-box {
      border-left: 2px solid #d8e7f5;

    }
    .other {
      .header {
        display: flex;
        justify-content: center;
        align-items: center;
        .line {
          background: #efefef;
          height: 1px;
          width: 120px;
          margin: 0 15px;
        }
      }
      .other-list {
        display: flex;
        flex-direction: row;
        .item {
          width: 200px;
          height: 215px;
          background: #ffffff;
          margin: 20px 7.5px;
          padding: 10px;
          .logo {
            width: 198px;
            height: 148px;
            border: 1px solid #5797d3;
            border-radius: 5px;
          }
          .text {
            font-size: 14px;
            margin: 10px 0;
            width: 200px;
          }
        }
      }
    }
  }
</style>
