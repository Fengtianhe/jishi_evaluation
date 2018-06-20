<template>
  <div class="enterprise-case">
    <img src="@/assets/case/enterprise_case.png" width="100%">
    <!--<div class="item">-->
      <!--<img src="@/assets/img/yd.png" alt="">-->
      <!--<div class="content">-->
        <!--<div class="desc">-->
          <!--中国移动的成长是一个不断自我超越的历程。坚持“服务与业务领先”，以“争创世界一流通信企业”为目标，创造了移动通信事业大发展的辉煌；展望未来，中国移动将以“做世界一流企业”为己任，努力实现从优秀到卓越的新跨越。-->
        <!--</div>-->
        <!--<div class="overview">-->
          <!--结合企业实际，制定出人才测评系统-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->

    <!--<div class="item">-->
      <!--<div class="content">-->
        <!--<div class="desc">-->
          <!--广州市绿茵阁餐饮连锁有限公司是中国的西餐连锁企业之一，成立于1989年。其所经营的“绿茵阁”西餐厅从2002年开始连续被评为“全国餐饮百强企业”（排名前50位），荣获中国烹饪协会授予的“中华餐饮名店”称号，2004年“绿茵阁”被评为“全国100最佳特色餐厅”、“广东省著名商标”。-->
        <!--</div>-->
        <!--<div class="overview">-->
          <!--我们为该企业制定出人力资源整体构建。-->
        <!--</div>-->
      <!--</div>-->
      <!--<img src="@/assets/img/lyg.png" alt="">-->
    <!--</div>-->

    <!--<div class="item">-->
      <!--<img src="@/assets/img/joeone.png" alt="">-->
      <!--<div class="content">-->
        <!--<div class="desc">-->
          <!--九牧王成立28年来，积极洞察消费者需求，以国际前沿的设计理念不断探索，始终坚持以精工的产品获得消费者满意，铸就“精工时尚”的产品形象；建立欧洲工作室，整合全球资源，形成更国际化、系列化的研发体系，以世界一流的时尚资讯，为精英男士源源不断地输出极具创造性的设计方案。-->
        <!--</div>-->
        <!--<div class="overview">-->
          <!--我们为该公司做了营销人才的管理培训。-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->

    <!--<div class="item">-->
      <!--<div class="content">-->
        <!--<div class="desc">-->
          <!--慧聪网（HK02280）成立于1992年，是国内b2b电子商务服务提供商。慧聪网注册企业用户已超过1500万，买家资源达到1120万，覆盖行业超过70余个，员工2500名左右。-->
          <!--财报显示，慧聪网2012年销售成本同比增加2.3%，销售收入则增长了约25%。销售与市场人员的数量分别为2012年2125人，2011年2307人。-->

        <!--</div>-->
        <!--<div class="overview">-->
          <!--我们为慧聪网做人才甄选，面试各岗位候选人。-->
        <!--</div>-->
      <!--</div>-->
      <!--<img src="@/assets/img/hc.png" alt="">-->
    <!--</div>-->
  </div>
</template>

<script>
  export default {}
</script>

<style scope lang="scss">
  .enterprise-case {
    width: 755px;
    .item {
      padding: 40px 30px;
      background: #fff;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      img {
        width: 160px;
        height: 160px;
      }
      .content {
        text-align: left;
        width: 500px;
        .desc {
          font-weight: 600;
          line-height: 30px;
        }
        .overview {
          margin-top: 20px;
          font-size: 20px;
          font-weight: bolder;
        }
      }
    }
  }
</style>
