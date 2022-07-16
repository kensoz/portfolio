<template>
  <div class="flex items-center mb-2 text-lg font-semibold">
    <div class="mr-5">
      <fa-icon :icon="props.icon" size="md" />
    </div>

    <div class="mr-2">
      <slot name="text1" />
    </div>

    <div class="mr-2">
      <slot name="text2" />
    </div>

    <div class="">
      <slot name="text3" />
    </div>
  </div>
</template>

<script lang="ts" setup>
// ----- Props -----
const props = defineProps<{
  icon: string
}>()
</script>
