<template>
  <div>
    <div class="demo-pagination-block">
      <el-pagination
          v-model:current-page="currentPage4"
          v-model:page-size="pageSize4"
          :page-sizes="[1, 5, 10, 20]"
          :small="true"
          :disabled="disabled"
          :background="background"
          layout="total, sizes,->, prev, pager, next, jumper"
          :total="10"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.demo-pagination-block {
  margin-top: 20px;
}
</style>