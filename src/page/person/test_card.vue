<template>
  <div class="test-card">
    <div class="tab-box">
      <div class="tab">
        <div class="tab-item" :class="{'selected': true}">未完成</div>
        <div class="tab-item">已完成</div>
      </div>
      <div class="tab-content">
        <div class="img">

        </div>
        <div class="info font12">
          <div style="font-size: 18px;font-weight: bolder">评测标题</div>
          <div style="display: flex;flex-direction: row;align-items: flex-end;margin-top: 20px">
            <div style="font-size: 18px;font-weight: bolder;color: #fe1313;">¥12.00</div>
            <div style="margin-left: 10px">结束后恢复原价</div>
            <div style="margin-left: 10px">数量：x33份</div>
          </div>
          <div>原价¥99</div>
          <div style="margin-top: 30px">购买时间：2018-01-01 12:00</div>
          <div>订单编号：1278123899878321</div>
        </div>

        <div class="btn-box">
          <div class="operator in">立即测试</div>
          <div class="operator out">继续测评</div>
          <div class="operator in">查看报告</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="scss">
  .test-card {
    background-color: #fff;
    border-radius: 10px;
    width: 100%;
    min-height: 620px;
    padding: 20px;
    .tab-box {
      border: 1px solid #efefef;
      .tab {
        display: flex;
        flex-direction: row;
        .tab-item {
          flex: 1;
          background: #f5f8fa;
          height: 60px;
          color: #267ac7;
          line-height: 60px;
          cursor: pointer;
          &.selected {
            background: #267ac7;
            color: #ffffff;
          }
        }
      }
      .tab-content {
        padding: 20px;
        display: flex;
        flex-direction: row;
        .img {
          width: 240px;
          height: 180px;
          background: #132768;
        }
        .info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin: 0 0 0 25px;
          padding: 10px;
          width: 440px;
        }
        .btn-box {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .operator {
            border: 1px solid #267ac7;
            font-size: 12px;
            border-radius: 5px;
            padding: 5px;
            &.in {
              background: #267ac7;
              color: #fff;
            }
            &.out {
              color: #267ac7;
            }
          }
        }
      }
    }
  }
</style>
