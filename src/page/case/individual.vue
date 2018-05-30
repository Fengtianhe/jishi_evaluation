<template>
  <div class="individual-case">
    <div class="item" v-for="n in 4">
      <div class="text"></div>
      <div class="btn"></div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="scss">
  .individual-case {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    .item {
      width: 220px;
      height: 280px;
      background: white;
      margin: 20px 7.5px;
      .text {
        width: 220px;
        height: 220px;
      }
      .btn {
        width: 220px;
        height: 60px;
        background-image: url("../../assets/img/jianbian_btn_1.png");
      }
    }
  }
</style>
