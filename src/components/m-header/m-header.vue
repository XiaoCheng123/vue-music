<template>
  <div class="m-header">
    <div class="icon"></div>
    <h1 class="text">Music</h1>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style scoped>
  .m-header {
    position: relative;
    height: 44px;
    text-align: center;
    background-color: #c0ccda;
  }
  .icon {
    display: inline-block;
    vertical-align: top;
    margin-top: 6px;
    width: 30px;
    height: 32px;
    background-image: url("./logo@2x.png");
    background-size: 30px 32px;
  }
  .text {
    display: inline-block;
    margin-top: 14px;
    margin-left: 3px;
    color: #00a2ae;
  }
</style>
