<template>
  <header class="box-border border-b border-gray-300 dark:border-gray-500">
    <div class="container mx-auto h-16 hidden md:flex justify-between">
      <h1 class="flex items-center text-primary text-3xl hover:text-blue-500">
        <a href="/">
          <svg class="icon inline" aria-hidden="true">
            <use xlink:href="#icon-hailang"></use>
          </svg>
          &nbsp;
          <span>sin² α + cos² α</span>
        </a>
      </h1>

      <div class="space-x-6 flex items-center">
        <!-- <router-link to="/music" class="hover:text-primary">
					{{ $t('header.music') }}
				</router-link> -->

        <!-- <a href="https://gitee.com/zengbin996/music-vue3-pc"> {{ $t('header.musicPc') }}</a>
				<a href="https://gitee.com/zengbin996/music-react-mobile"> {{ $t('header.musicMobile') }}</a> -->

        <a href="http://116.204.127.62:9002/"> {{ $t('header.musicPc') }}</a>
        <a href="http://116.204.127.62:9001/"> {{ $t('header.musicMobile') }}</a>

        <router-link to="/wallpaper" class="hover:text-primary">
          {{ $t('header.wallpaper') }}
        </router-link>

        <!-- <router-link to="/camera" class="hover:text-primary">
					{{ $t('header.camera') }}
				</router-link> -->

        <el-divider direction="vertical" class="mx-4" />

        <!-- 语言 -->
        <el-popover trigger="hover">
          <template #reference>
            <svg class="icon inline text-xl cursor-pointer" aria-hidden="true">
              <use xlink:href="#icon-duoyuyan"></use>
            </svg>
          </template>
          <div class="text-center leading-6 cursor-pointer">
            <p
              :class="item.id == lang.locale ? 'hover:text-primary text-primary ' : 'hover:text-primary'"
              v-for="item in lang.type"
              :key="item.id"
              @click="changeLang(item.id)"
            >
              {{ item.title }}
            </p>
          </div>
        </el-popover>

        <!-- 主题模式 -->
        <el-popover trigger="hover">
          <template #reference>
            <svg
              class="icon inline text-xl cursor-pointer"
              aria-hidden="true"
              :class="theme.locale !== 'system' ? 'text-primary' : ''"
            >
              <use :xlink:href="getThemeIcon"></use>
            </svg>
          </template>

          <div class="text-center leading-8 cursor-pointer">
            <p
              :class="item.id == theme.locale ? 'hover:text-primary text-primary ' : 'hover:text-primary'"
              v-for="item in theme.type"
              :key="item.id"
              @click="changeTheme(item.id)"
            >
              <svg class="icon inline-block text-xl" aria-hidden="true">
                <use :xlink:href="item.icon"></use>
              </svg>
              {{ item.title }}
            </p>
          </div>
        </el-popover>
        <a href="https://gitee.com/zengbin996/own-vue">
          <svg class="icon inline-block text-3xl" aria-hidden="true">
            <use xlink:href="#icon-widget_5"></use>
          </svg>
        </a>
      </div>
    </div>

    <!-- 手机模式 -->
    <div class="dark:bg-slate-900 md:hidden">
      <div class="flex justify-between items-center text-primary text-2xl h-12 px-6">
        <a href="/">
          <svg class="icon inline" aria-hidden="true">
            <use xlink:href="#icon-hailang"></use>
          </svg>
          &nbsp;
          <span>sin² α + cos² α</span>
        </a>

        <div class="text-gray-500" @click="more">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gengduo"></use>
          </svg>
        </div>
      </div>

      <Popup v-model:show="popupVis" class="dark:bg-slate-900" round position="top" closeable>
        <div class="pt-8 text-xl indent-14 leading-10">
          <p>
            <a href="http://116.204.127.62:9002/"> {{ $t('header.musicPc') }}</a>
          </p>
          <p>
            <a href="http://116.204.127.62:9001/"> {{ $t('header.musicMobile') }}</a>
          </p>
          <p>
            <router-link to="/wallpaper">
              {{ $t('header.wallpaper') }}
            </router-link>
          </p>

          <!-- <p>
						<router-link to="/camera">
							{{ $t('header.camera') }}
						</router-link>
					</p> -->

          <p>
            <a href="https://gitee.com/zengbin996/own-vue">Gitee</a>
          </p>

          <Divider />

          <p class="text-base">
            {{ $t('header.switchTheme') }}
            <el-select v-model="theme.locale" placeholder="Select" size="large" class="w-32" @change="changeTheme">
              <el-option v-for="item in theme.type" :key="item.id" :label="item.title" :value="item.id" />
            </el-select>
          </p>

          <p class="my-4">
            <Button
              v-for="item in lang.type"
              :key="item.id"
              @click="changeLang(item.id)"
              :type="item.id === lang.locale ? 'primary' : 'default'"
              >{{ item.title }}</Button
            >
          </p>
        </div>
      </Popup>
    </div>
  </header>
</template>

<script setup>
import { computed, reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n';

import { Popup, Button } from 'vant';
import { Divider } from 'vant';
import { RadioGroup, Radio } from 'vant';

const i18n = new useI18n();

const popupVis = ref(false);
const more = () => {
  popupVis.value = true;
};

//国际化
const lang = reactive({
  type: [
    {
      title: '中文',
      id: 'zh-CN',
    },
    {
      title: 'English',
      id: 'en-US',
    },
  ],
  locale: 'zh-CN',
});

//改变语言
const changeLang = id => {
  lang.locale = id;
  localStorage.lang = id;
  i18n.locale.value = id;
};

//初始化
changeLang(localStorage.lang || 'zh-CN');

//主题模式
const theme = reactive({
  type: [
    {
      title: i18n.t('header.themeLight'),
      icon: '#icon-rijianmoshixhdpi',
      id: 'light',
    },
    {
      title: i18n.t('header.themeDark'),
      icon: '#icon-a-darkyejianmoshiheiyemoshishensemoshianheimoshi',
      id: 'dark',
    },
    {
      title: i18n.t('header.themeSystem'),
      icon: '#icon-xitongshezhi',
      id: 'system',
    },
  ],
  locale: localStorage.theme || 'system',
});

//改变主题
const changeTheme = id => {
  theme.locale = id;
  localStorage.theme = id;

  if (getTheme(id) === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

//导航栏显示图标
const getThemeIcon = computed(() => theme.type.find(item => item.id === getTheme(theme.locale)).icon);

//获取主题 dark 或者 light
const getTheme = id => {
  return id === 'system' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : id;
};

//初始化
changeTheme(theme.locale);
</script>
