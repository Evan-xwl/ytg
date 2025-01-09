<template>
  <div>
    <div class="header">
      <div class="container">
        <div class="left">
          <img src="../../assets/logo.png" alt="logo">
          <h1>易通挂 挂号从未如此简单</h1>
        </div>
        <div class="right">
          <span>帮助中心</span>
          <span>登录/注册</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.header {
  position: fixed;
  z-index: 1000;
  top: 0;
  width: 100%;
  height: 70px;
  border-bottom: solid 1px #2d2c2a;
  display: flex;
  justify-content: center;
  background: #ffffff;
  .container {
    width: 900px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      display: flex;
      align-items: center;
      img {
        width: 60px;
      }
      h1 {
        font-size: 20px;
        color: #c77c2b;
        margin: 20px;
      }
    }
    .right {
      span {
        font-size: 15px;
        margin-left: 20px;
        color: dimgrey;
      }
    }
  }
}
</style>