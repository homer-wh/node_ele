<template>
  <div id="examples">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'examples'
}
</script>

<style lang="less">

/* 屏宽控制 */
@screen-min: 300px;
@screen-max: 640px;

body {
  margin: 0 auto;
  min-width: @screen-min;
  max-width: @screen-max;
  background: #fff;
}

//【统一类】fixed公共控制样式
.fixed {
  position: fixed;
  top: 0;
  width: 100%;
  max-width: @screen-max;
  z-index: 50;
}

#examples{
  /* some style */
}
</style>
