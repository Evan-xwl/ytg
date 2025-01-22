<template>
  <div>
    <Carousel/>
    <Search/>
    <div class="home-content">
      <el-row :gutter="30">
        <el-col :span="18"><div class="grid-content ep-bg-purple" />
          <Category/>
          <div class="hospital-card">
            <Card class="card-outer" v-for="item in 10" :key="item"/>
          </div>
          <Pagination/>
        </el-col>
        <el-col :span="6"><div class="grid-content ep-bg-purple-light" />
          <Notification/>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import Carousel from '@/components/carousel/index.vue'
import Search from '@/components/search/index.vue'
import Category from '@/components/category/index.vue'
import Notification from '@/components/notification/index.vue'
import Card from '@/components/card/index.vue'
import Pagination from '@/components/pagination/index.vue'
</script>
<style scoped lang="scss">
.home-content {
  margin-top: 50px;
  .hospital-card {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .card-outer {
      width: 48%;
      margin: 10px 0;
    }
  }
}
</style>