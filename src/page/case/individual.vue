<template>
  <div class="individual-case">
    <img src="@/assets/case/personal-1.png"/>
    <img src="@/assets/case/personal-2.png"/>
    <img src="@/assets/case/personal-3.png"/>
    <!--<img src="@/assets/img/indiv.png" alt="">-->

    <!--<div class="content">-->
      <!--<div class="name">陈天天</div>-->
      <!--<div class="item_title">背景：</div>-->
      <!--<div class="desc">-->
        <!--就职于浙江奥通集团，浙江本地人，大学四年财务专业本科，两年半财务工作经验。-->
      <!--</div>-->
      <!--<div class="item_title">在企业原来的工作状态：</div>-->
      <!--<div class="desc">-->
        <!--在财务工作十分的努力认真，但即使通宵达旦财务工作仍然是漏洞不断，经常出错，整个人变得越来越不自信，甚至怀疑人生。-->
      <!--</div>-->
      <!--<div class="backg">-->
        <!--浙江奥通集团的董事长找到基石测评公司创始人为其团队做人才盘点，陈天天属于其中一个。-->
      <!--</div>-->
      <!--<div class="item_title">经过专家职业规划后：</div>-->
      <!--<div class="desc">-->
        <!--陈天天参加了基石测评公司个人测评，专家根据其测评结果中的性格、天赋，素质能力进行了深估后，帮她做出了适合她的职业规划，换岗到4S店技术服务岗位，3个月成为该岗位最优秀的优秀员工，服务客户业绩超出最优秀老店员工达3倍以上。从此我们可以天天看到她脸上的笑容和自信，更重要的是终于找到了自己的价值感。-->
      <!--</div>-->
      <!--<div class="item_title">总结：</div>-->
      <!--<div class="desc">-->
        <!--世界上没有庸才，只有放错位置的人才，因为陈天天在高考专业选择时并没有对自己有深刻的认知和长远的规划，认为女孩子学财务未来很稳定就不错，但却因为这粗浅的认知而浪费了孩子大学四年和职场两年半的时间，整个职场起点比其他人足足低了六年多的时间。设想如果一开始她选择的就是适合自己的专业，毕业后从事的就是自己适合的工作，而今天她的成就绝不仅仅如此......-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="scss">
  .individual-case {
    /*background: #fff;*/
    /*width: 755px;*/
    /*padding: 30px;*/
    /*display: flex;*/
    /*flex-direction: row;*/
    /*justify-content: space-between;*/
    img {
      width: 100%;
      margin-bottom: 10px;
    }
    .content {
      width: 380px;
      text-align: left;
      .name {
        font-size: 18px;
        font-weight: bolder;
      }
      .item_title {
        color: #f47c07;
        text-underline: #f47c07;
        font-size: 14px;
        font-weight: bolder;
        height: 30px;
        line-height: 30px;
      }
      .desc {
        font-weight: 600;
        line-height: 30px;
      }
      .backg {
        line-height: 30px;
        font-weight: 600;
        background: #f5f5f5;
        padding: 10px;
        margin: 10px 0;
      }
    }
  }
</style>
