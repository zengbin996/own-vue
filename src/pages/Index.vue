<template>
  <div class="w-full bg-white text-gray-800 dark:bg-slate-900 dark:text-white font-sans">
    <Header></Header>
    <main>
      <Introduce></Introduce>
      <Map></Map>
      <Photos></Photos>
    </main>
    <MiniGame></MiniGame>
    <Footer></Footer>
  </div>
</template>

<script lang="ts" setup>
import Header from './home/Header.vue';
import Introduce from './home/Introduce.vue';
import Map from './home/Map.vue';
import Photos from './home/Photos.vue';
import MiniGame from './home/MiniGame.vue';
import Footer from './home/Footer.vue';
</script>
