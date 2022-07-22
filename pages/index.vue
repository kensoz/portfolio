<template>
  <!-- main contents -->
  <section class="flex flex-col mb-5">
    <div v-for="i in config" :key="i.id">
      <IndexItem :icon="i.icon">
        <template #text1>
          <a :href="i.text1Link" :class="[i.text1Link === '#' ? 'cursor-default' : 'hover:underline hover:text-gray-400']">{{ i.text1 }}</a>
        </template>

        <template #text2>
          <a :href="i.text2Link" :class="[i.text2Link === '#' ? 'cursor-default' : 'hover:underline hover:text-gray-400']">{{ i.text2 }}</a>
        </template>

        <template #text3>
          <a :href="i.text3Link" :class="[i.text3Link === '#' ? 'cursor-default' : 'hover:underline hover:text-gray-400']">{{ i.text3 }}</a>
        </template>
      </IndexItem>
    </div>
  </section>
</template>

<script lang="ts" setup>
// data
const config = [
  { id: 1, icon: 'user', text1: 'RenHou', text1Link: '#', text2: '', text2Link: '#', text3: '', text3Link: '#' },
  { id: 2, icon: 'briefcase', text1: 'Web Front-End Engineer', text1Link: '#', text2: '', text2Link: '#', text3: '', text3Link: '#' },
  { id: 3, icon: 'book', text1: 'Resume', text1Link: 'https://github.com/kensoz/resume', text2: '', text2Link: '#', text3: '', text3Link: '#' },
  {
    id: 4,
    icon: 'circle-nodes',
    text1: 'Wantedly,',
    text1Link: 'https://www.wantedly.com/id/kensoz',
    text2: 'Linkedin',
    text2Link: 'https://jp.linkedin.com/in/kensoz',
    text3: '',
    text3Link: '#'
  },
  { id: 5, icon: 'cube', text1: 'BLOG', text1Link: 'https://kensoz.github.io/blog/', text2: '', text2Link: '#', text3: '', text3Link: '#' },
  {
    id: 6,
    icon: 'cubes',
    text1: 'Qiita,',
    text1Link: 'https://qiita.com/kensoz',
    text2: 'SegmentFault,',
    text2Link: 'https://segmentfault.com/u/kensoz/articles',
    text3: 'Juejin',
    text3Link: 'https://juejin.cn/user/1029616691882653'
  },
  { id: 7, icon: 'seedling', text1: 'OSS', text1Link: 'https://github.com/kensoz', text2: '', text2Link: '#', text3: '', text3Link: '#' }
]
</script>
