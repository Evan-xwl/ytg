<template>
  <div>
    <el-carousel height="250px">
      <el-carousel-item v-for="item in imgs" :key="item">
        <img :src="item" alt="轮播图">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts">
import img1 from '@/assets/carousel/carousel-1.png'
import img2 from '@/assets/carousel/carousel-2.png'
import img3 from '@/assets/carousel/carousel-3.png'
const imgs = [img1, img2, img3]
</script>

<style scoped lang="scss">
img {
  height: 250px;
}
:deep(.el-carousel__item) {
  text-align: center;
}
</style>