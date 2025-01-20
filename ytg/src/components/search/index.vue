<template>
  <div class="search">
    <el-autocomplete
        v-model="searchContent"
        clearable
        placeholder="请输出需要查询的医院名称"
    />
    <div class="search-button">
      <el-button type="primary" :icon="Search">查询</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import { Search } from '@element-plus/icons-vue'
let searchContent = ref('')
</script>

<style scoped lang="scss">
.search {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  .search-button {
    margin-left: 20px;
  }
}
:deep(.el-autocomplete) {
  width: 500px;
}
</style>