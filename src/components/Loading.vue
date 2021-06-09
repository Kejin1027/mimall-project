<template>
  <div class="loading">
      <!-- public整个项目根目录 -->
    <img src="/imgs/loading-svg/loading-bars.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'loading'
}
</script>

<style lang="scss">
  .loading{
    height: 80px;
    line-height: 80px;
    text-align: center;
    img{
      height: 100%;
    }
  } 
</style>