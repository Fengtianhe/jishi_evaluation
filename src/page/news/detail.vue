<template>
  <div class="news_detail_page">
    <h4>{{detail.title}}</h4>

    <div class="desc">
      {{detail.keyword}} | {{detail.created_at}}
    </div>

    <div class="content" v-html="detail.content">

    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        detail: {}
      }
    },
    mounted: function () {
      const self = this
      const new_id = self.$route.params.id
      self.$api.get(`/news/${new_id}`, {}, function (res) {
        self.detail = res.data
      })
    }
  }
</script>

<style scoped lang="scss">
  .news_detail_page {
    width: 1180px;
    padding: 25px;
    background: white;
    margin: 20px auto;
    border-radius: 10px;
    text-align: left;
    .desc {
      font-size: 12px;
      margin-top: 35px;
    }
    .content {
      padding: 35px;
      text-indent: 2em;
      line-height: 2;
    }
  }
</style>
