<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/recommend">
      <span class="tab-link">推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/singer">
      <span class="tab-link">歌手</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/rank">
      <span class="tab-link">排行</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/search">
      <span class="tab-link">搜索</span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style scoped>
  .tab {
    display: flex;
  }
  .tab-item {
    height: 44px;
    line-height: 44px;
    text-align: center;
    flex: 1;
  }
  .tab-link {
    padding-bottom: 5px;
    color: #c0ccda;
  }
  .router-link-active {
    color: #00a2ae;
    background-color: #00a2ae;
  }
</style>
