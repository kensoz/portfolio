<template>
  <section class="flex flex-col mb-5">
    <!-- main contents -->
    <div v-for="i in data" :key="i.id">
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
// ----- data -----
interface IData {
  id: number
  icon: string
  text1: string
  text1Link: string
  text2: string
  text2Link: string
  text3: string
  text3Link: string
}

const { data } = await useFetch<IData[]>('../public/data/index.json')
</script>
