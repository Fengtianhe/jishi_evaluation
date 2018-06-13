<template>
  <div class="news">
    <div class="item" v-for="n in news" @click="show_detail(n)">
      <div class="logo">
        <img :src="n.banner" alt="">
      </div>
      <div class="info-box">
        <div class="title">{{n.title}}</div>
        <div class="describe font12"></div>
        <div class="footer">
          <div class=" font12">浏览量：{{n.read_num}}+</div>
          <div class=" font12">{{n.created_at | time_format('MM-dd')}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        news: []
      }
    },
    mounted: function () {
      const self = this
      self.$api.get('/news', {}, function (res) {
        self.news = res.data.data
      })
    },
    methods: {
      show_detail: function (n) {
        this.$router.push({path: `/news/${n.id}`})
      }
    }
  }
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
      height: 168px;
      border: 1px solid #efefef;
      cursor: pointer;
      .logo {
        width: 300px;
        height: 168px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .info-box {
        padding: 20px 20px 20px 20px;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 260px;
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
