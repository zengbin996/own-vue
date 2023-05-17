<template>
  <p class="text-center text-sm text-gray-700 bg-gray-200">
    图片来源网络，请勿商用，由此带来的法律责任概不负责，如有侵权，请联系 victorybin@foxmail.com 删除
  </p>

  <el-select v-model="wallpaperState.currentId" placeholder="选择分类" @change="change" class="m-2">
    <el-option v-for="item in wallpaperState.classifyList" :key="item.id" :label="item.name" :value="item.id">
    </el-option>
  </el-select>

  <div class="img-con">
    <template v-for="item in wallpaperState.dataList" :key="item.id">
      <div class="box">
        <img :src="item.img_1024_768" />
        <div class="download">
          <el-link type="primary" :href="item.img_1024_768" target="_blank">1024*768</el-link>
          <el-link type="primary" :href="item.img_1280_1024" target="_blank">1280*1024</el-link>
          <el-link type="primary" :href="item.img_1280_800" target="_blank">1280*800</el-link>
          <el-link type="primary" :href="item.img_1366_768" target="_blank">1366*768</el-link>
          <el-link type="primary" :href="item.img_1440_900" target="_blank">1440*900</el-link>
          <el-link type="primary" :href="item.img_1600_900" target="_blank">1600*900</el-link>
        </div>
      </div>
    </template>
  </div>

  <p class="text-center leading-8 pb-12" v-loading="loading">
    <el-button type="text" @click="loadingNext" size="large">点击加载更多</el-button>
  </p>

  <el-backtop :right="50" :bottom="50" />
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import _ from 'lodash';
import axios from 'axios';

const route = useRoute();
const router = useRouter();

const wallpaperState = reactive({
  classifyList: [], //分类列表
  dataList: [], //图片列表
  currentId: '', //当前选中分类
  pageSize: 24, //每次加载数量
  pageNumber: 0, //页面
});

const loading = ref(true);

//获取列表
const getList = ({ cid, start, count }) => {
  loading.value = true;

  axios
    .get('http://116.204.127.62:9003?c=WallPaper&a=getAppsByCategory', { params: { cid, start, count } })
    .then(result => {
      loading.value = false;

      wallpaperState.dataList = [...wallpaperState.dataList, ...result.data.data];
    });
};

//初始化
const init = async () => {
  const { data } = await axios.get('http://116.204.127.62:9003' + '?c=WallPaper&a=getAllCategoriesV2&from=360chrome');

  wallpaperState.classifyList = data.data;
  wallpaperState.currentId = route.query.cid || data.data[0].id;

  getList({
    cid: wallpaperState.currentId,
    start: wallpaperState.pageNumber * wallpaperState.pageSize,
    count: wallpaperState.pageSize,
  });
};

//切换分类
const change = cid => {
  router.push('/wallpaper?cid=' + cid);
  wallpaperState.currentId = cid;
  wallpaperState.pageNumber = 0;
  wallpaperState.dataList = [];

  getList({
    cid: wallpaperState.currentId,
    start: wallpaperState.pageNumber * wallpaperState.pageSize,
    count: wallpaperState.pageSize,
  });
};

init();

const loadingNext = _.debounce(() => {
  getList({
    cid: wallpaperState.currentId,
    start: ++wallpaperState.pageNumber * wallpaperState.pageSize,
    count: wallpaperState.pageSize,
  });
}, 300);
</script>

<style scoped>
.img-con {
  font-size: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

@media screen and (max-width: 1600px) {
  .img-con {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width: 1200px) {
  .img-con {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 992px) {
  .img-con {
    grid-template-columns: repeat(1, 1fr);
  }
}

.box {
  position: relative;
}

.box:hover .download {
  visibility: visible;
  cursor: pointer;
}

.download {
  visibility: hidden;
  font-size: 16px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: rgba(0, 0, 0, 0.5);
}

.el-link {
  line-height: 2;
}

img {
  width: 100%;
}
</style>
