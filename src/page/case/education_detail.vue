<template>
  <div class="education-detail">
    <el-steps direction="vertical" :active="2">
      <el-step title="步骤 1"
               description="这是一段很长很长很长的描述性文字这是一段很长很长很长的描述性文字这是一段很长很长很长的描述性文字这是一段很长很长很长的描述性文字这是一段很长很长很长的描述性文字这是一段很长很长很长的描述性文字这是一段很长很长很长的描述性文字这是一段很长很长很长的描述性文字这是一段很长很长很长的描述性文字这是一段很长很长很长的描述性文字">
      </el-step>
      <el-step title="步骤 2"></el-step>
      <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
    </el-steps>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="scss">
  .education-detail {
    background: #fff;
    width: 1020px;
    margin-top: 20px;
  }
</style>
