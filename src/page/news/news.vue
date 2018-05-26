<template>
  <div class="news">
    <div class="item" v-for="n in 5">
      <div class="logo">
        <img src="@/assets/news_logo.png" alt="">
      </div>
      <div class="info-box">
        <div class="title">金融无暇</div>
        <div class="describe font12">金融无暇金融无暇金融无暇金融无暇金融无暇金融无暇</div>
        <div class="footer">
          <div class=" font12">浏览量：123+</div>
          <div class=" font12">5-8</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="scss">
  .news {
    width: 1200px;
    background: #fff;
    margin: 20px auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .item {
      display: flex;
      flex-direction: row;
      margin: 10px 17.5px;
      width: 560px;
      height: 240px;
      border: 1px solid #efefef;
      .logo {
        width: 300px;
        height: 240px;
      }
      .info-box {
        padding: 30px 20px 20px 20px;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .title {
          font-size: 20px;
          font-weight: bolder;
        }
        .describe {
          height: 120px;
        }
        .footer {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
      }
    }
  }
</style>
