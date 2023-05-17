<template>
  <div class="md:container md:mx-auto">
    <div id="charts" class="charts-map"></div>
  </div>
</template>

<script setup>
import { nextTick, onMounted } from 'vue';
import * as echarts from 'echarts';
import { useI18n } from 'vue-i18n';
import { IsMedia } from '../../utils/global';
import china from '../../assets/map/china.json';

echarts.registerMap('china', china);
const i18n = new useI18n();

const echartsDraw = () => {
  const chartDom = document.getElementById('charts');
  const myChart = echarts.init(chartDom);
  chartDom.removeAttribute('_echarts_instance_');

  //https://www.google.com/maps 查询坐标

  const footprint = [
    [34.265088968502866, 108.95024945477402], //西安
    [34.6096480104217, 108.48723804025089], //咸阳
    [33.39076295809011, 109.8069952653452], //商洛
    [34.75231283443789, 106.50461274792572], //宝鸡
    [33.11517652657251, 107.06296612985867], //汉中
    [30.608439333764853, 104.07191888366381], //成都
    [22.81804671389275, 108.36411157462854], //南宁
    [21.455419963427268, 109.1304633189505], //北海
    [22.81975309557381, 106.82197859551223], //崇左
    [36.62606210846314, 101.78997595640057], //西宁
    [36.91342612743801, 100.09243860466682], //青海湖
    [36.071273927765375, 120.37562258224959], //青岛
    [26.072603428811814, 119.29949096240252], //福州
    [24.510927756330577, 117.65377366577064], //漳州
    [24.494326102214718, 118.13967444423031], //厦门
    [23.687177337241792, 117.43557011619761], //东山岛
    [30.142162418139925, 118.17532735830969], //黄山
  ];

  footprint.forEach(a => a.unshift(a.pop()));

  const frequencyScatter = [];

  footprint.forEach(item => {
    frequencyScatter.push({ value: item });
  });

  const option = {
    title: {
      show: true,

      text: i18n.t('map.title'),
      textStyle: {
        fontSize: 16,
        color: '#999',
      },
      left: 'center',
      top: '5%',
    },
    geo: {
      type: 'map',
      map: 'china',
      silent: true, //取消鼠标移入事件

      // roam: true,
      zoom: 1.4,
      regions: [
        {
          name: '南海诸岛',
          itemStyle: {
            // 隐藏地图
            opacity: 0, // 为 0 时不绘制该图形
          },
          label: {
            show: false, // 隐藏文字
          },
        },
      ],
      itemStyle: {
        areaColor: '#00000000', //rgba设置透明度0
        borderColor: localStorage.theme === 'light' ? '#666' : '#409EFF', //省份边框颜色
        borderWidth: IsMedia() === 'm' ? 0.1 : 0.3, //省份边框
      },
    },
    series: [
      {
        data: frequencyScatter,
        type: 'effectScatter',
        coordinateSystem: 'geo',
        symbolSize: IsMedia() === 'm' ? 5 : 10,
        rippleEffect: {
          scale: IsMedia() === 'm' ? 3 : 5,
        },
      },
    ],
  };

  myChart.setOption(option);

  window.addEventListener('resize', function () {
    myChart.resize();
  });
};

nextTick(() => {
  echartsDraw();
});
</script>

<style scoped>
.charts-map {
  height: 50vw;
}

@media screen and (max-width: 768px) {
  .charts-map {
    height: 40vh;
  }
}
</style>
