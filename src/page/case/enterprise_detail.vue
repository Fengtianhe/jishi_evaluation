<template>
  <div class="enterprise-detail">
    <div data-v-4d739807="" class="el-steps el-steps--vertical">
      <div data-v-4d739807="" class="el-step is-vertical" style="flex-basis: 50%;">
        <div class="el-step__head is-finish">
          <div class="el-step__line" style="margin-right: 0px;">
            <i class="el-step__line-inner" style="transition-delay: 0ms; border-width: 0px; height: 0%;"></i>
          </div>
          <div class="el-step__icon is-text"><!---->
            <div class="el-step__icon-inner"></div>
          </div>
        </div>
        <div class="el-step__main">
          <div class="el-step__title is-finish">步骤 1</div>
          <div class="el-step__description is-finish">
            <div style="height: 100px;"></div>
          </div>
        </div>
      </div>
      <div data-v-4d739807="" class="el-step is-vertical" style="flex-basis: 50%;">
        <div class="el-step__head is-finish">
          <div class="el-step__line" style="margin-right: 0px;">
            <i class="el-step__line-inner" style="transition-delay: -150ms; border-width: 0px; height: 0%;"></i>
          </div>
          <div class="el-step__icon is-text"><!---->
            <div class="el-step__icon-inner"></div>
          </div>
        </div>
        <div class="el-step__main">
          <div class="el-step__title is-finish">步骤 2</div>
          <div class="el-step__description is-process"></div>
        </div>
      </div>
      <div data-v-4d739807="" class="el-step is-vertical is-flex" style="flex-basis: 50%;">
        <div class="el-step__head is-finish">
          <div class="el-step__line"><i class="el-step__line-inner"></i></div>
          <div class="el-step__icon is-text"><!---->
            <div class="el-step__icon-inner"></div>
          </div>
        </div>
        <div class="el-step__main">
          <div class="el-step__title is-finish">步骤 3</div>
          <div class="el-step__description is-wait">这是一段很长很长很长的描述性文字</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="scss">
  .enterprise-detail {
    background: #fff;
    width: 1020px;
    margin-top: 20px;
    .el-step__icon {
      border-radius: 50%;
      background-color: rgb(213, 229, 244);
      width: 24px;
      height: 24px;
      .el-step__icon-inner {
        
      }
    }
  }

  .椭圆_10 {
    border-radius: 50%;
    background-color: rgb(213, 229, 244);
    position: absolute;
    left: 386px;
    top: 98px;
    width: 24px;
    height: 24px;
    z-index: 160;
  }
</style>

