<template>
  <div class="c-content">
    <h1>医院</h1>
    <div class="level">
      <span class="title">
        等级:
      </span>
      <ul>
        <li class="active">全部</li>
        <li>一级甲等</li>
        <li>一级甲等</li>
        <li>一级甲等</li>
        <li>一级甲等</li>
        <li>一级甲等</li>
      </ul>
    </div>
    <div class="area">
      <span class="title">
        地区:
      </span>
      <ul>
        <li class="active">全部</li>
        <li>海淀区</li>
        <li>海淀区</li>
        <li>海淀区</li>
        <li>海淀区</li>
        <li>海淀区</li>
        <li>海淀区</li>
        <li>海淀区</li>
        <li>海淀区</li>
        <li>海淀区</li>
        <li>海淀区</li>
        <li>海淀区</li>
        <li>海淀区</li>
        <li>海淀区</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.c-content {
  margin-top: 0;
  color: #6e727a;
  h1 {
    margin-bottom: 20px;
    font-weight: bold;
  }
  .level, .area {
    display: flex;
    margin-top: 10px;
    .title {
      margin-right: 10px;
      min-width: 40px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        margin-right: 10px;
        margin-bottom: 10px;
        &.active {
          color: #ce7519;
        }
      }
      li:hover {
        cursor: pointer;
        color: #ce7519;
      }
    }
  }
}
</style>