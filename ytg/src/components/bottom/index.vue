<template>
  <div class="footer">
    <div class="container">
      <div class="left">
        <a href="#">xx备xx号</a>
        <span>电话:7758258-8888</span>
      </div>
      <div class="right">
        <a href="https://github.com/Evan-xwl?tab=repositories" target="_blank">联系我们</a>
        <a href="#">加个油</a>
        <a href="#">点个赞</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.footer {
  height: 70px;
  //background: #5d1056;
  width: 100%;
  display: flex;
  justify-content: center;

  .container {
    width: 900px;
    height: 100%;
    //background: lightcoral;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left, .right {
      font-size: 14px;
      span, a {
        margin-right: 10px;
        color: dimgrey;
      }
      a:last-child {
        margin-right: 0;
      }
      a:hover {
        color: #2d2a2a;
      }
    }
  }
}
</style>