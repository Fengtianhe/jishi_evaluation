<template>
  <div class="invited">
    <el-table border>
      <el-table-column label="邀请时间"></el-table-column>
      <el-table-column label="微信昵称"></el-table-column>
      <el-table-column label="购买时间"></el-table-column>
      <el-table-column label="测评时间"></el-table-column>
      <el-table-column label="消费金额"></el-table-column>
      <el-table-column label="测评报告"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="scss">
  .invited {
    background-color: #fff;
    border-radius: 10px;
    width: 100%;
    min-height: 620px;
    padding: 20px;
  }
</style>
