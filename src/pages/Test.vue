<template>
  <div class="com">
    <h1 className="spinMe">Scroll down..</h1>
  </div>
</template>

<script setup>
import lax from 'lax.js';
import { onMounted } from 'vue';

onMounted(() => {
  // Setup lax
  lax.init();

  lax.addDriver('scrollY', function () {
    return window.scrollY;
  });

  // Add your elements
  lax.addElements(
    '.spinMe',
    {
      scrollY: {
        rotate: [
          [0, 1e9],
          [0, 1e9],
        ],
      },
    },
    []
  );
});
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #dedbde;
  /* background-image: linear-gradient(rgba(255, 255, 255, 0.2) 50%, transparent 50%, transparent); */
  margin: 0;
  background-size: 700px 700px;
  height: 5000px;
}

h1 {
  font-family: sans-serif;
  text-align: center;
  top: calc(50vh - 40px);
  position: fixed;
  width: 100vw;
  font-size: 80px;
  margin: 0;
  color: #a26ddc;
}
</style>
