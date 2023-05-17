<template>
  <div class="pt-8 px-4 md:container m-auto md:flex md:justify-around">
    <div class="flex w-full md:w-96 md:m-0 text-lg bg-slate-100 dark:bg-slate-700 rounded-2xl overflow-hidden">
      <div class="w-32 text-center leading-8 p-4 border-r">
        <img src="https://s1.ax1x.com/2022/04/19/L0fF0A.md.jpg" class="w-24 h-24 rounded-full inline-block mb-4" />

        <p>{{ $t('introduce.name') }}</p>
        <p>{{ $t('introduce.occupation') }}</p>
        <p>{{ $t('introduce.location') }}</p>
        <p>{{ $t('introduce.hobby') }}</p>
      </div>

      <div class="flex-1 p-4">{{ $t('introduce.self') }}</div>
    </div>

    <div
      class="w-full md:w-96 mt-8 md:mt-0 p-4 shadow text-lg md:leading-8 bg-slate-100 dark:bg-slate-700 rounded-2xl md:origin-top-right md:transform md:-rotate-6"
    >
      {{ $t('introduce.article') }}
    </div>
  </div>
</template>

<script setup></script>
