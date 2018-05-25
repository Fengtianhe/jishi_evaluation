<template>
  <div class="message">
    <el-card shadow="hover" class="message-item">
      <div class="date left">
        <div class="day">27</div>
        <div class="month">2018-05</div>
      </div>
      <div class="con left">
        asdfasdfasdfasdfasdfknk kjh ah kjsd; sd fa sdf asd f f sdf s df sdf s df sdf sdf fdsf
        asdfasdfasdfasdfasdfknk kjh ah kjsd; sd fa sdf asd f f sdf s df sdf s df sdf sdf fdsf
        asdfasdfasdfasdfasdfknk kjh ah kjsd; sd fa sdf asd f f sdf s df sdf s df sdf sdf fdsf
      </div>
      <div class="time left">13:29</div>
      <div class="clearfix"></div>
    </el-card>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .message {
    background-color: #fff;
    border-radius: 10px;
    width: 100%;
    min-height: 620px;
    padding: 20px;
    .message-item {
      .el-card__body {
        padding: 10px !important;
        .date {
          border-right: 1px solid #efefef;
          padding: 0 25px 0 10px;
          .day {
            font-size: 45px;
            font-weight: bolder;
          }
          .month {
            font-size: 12px;
          }
        }
        .con {
          width: 670px;
          padding: 5px 0 5px 0px;
          height: 20px;
        }
        .time {
          font-size: 12px;
          padding: 0 15px 0 15px;
          margin-top: 55px;
        }
      }
      &:hover {
        background: #3b86cc;
        color: #fff;
        .day {
          color: #fff;
        }
      }
    }
  }
</style>
