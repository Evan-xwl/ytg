<template>
  <div class="content">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .content {
    width: 100%;
    height: 800px;
    margin-top: 70px;
    background: #2b57c7;
    display: flex;
    justify-content: center;
    .container {
      width: 900px;
      height: 100%;
    }
  }
</style>