<template>
  <div class="education-case">
    <div class="item" v-for="n in 10">
      <div class="logo">
        <img src="" alt="">
      </div>
      <div class="text">
        李大钊 《史观》：“至于﹝历史进展﹞动因何在
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scope lang="scss">
  .education-case {
    width: 1020px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    .item {
      width: 220px;
      height: 215px;
      background: #ffffff;
      margin: 20px 7.5px;
      padding: 10px;
      .logo {
        width: 218px;
        height: 148px;
        border: 1px solid #5797d3;
        border-radius: 5px;
      }
      .text {
        font-size: 14px;
        margin: 10px 0;
        width: 220px;
      }
    }
  }
</style>
