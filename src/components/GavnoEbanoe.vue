<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{ name: string }>();

const isSelected = ref(false);
</script>

<template>
  <div
    class="flex flex-1 flex-col gap-1 items-center cursor-pointer"
    @click="isSelected = !isSelected"
  >
    <div
      class="aspect-square rounded-[12px] w-full relative"
      :class="isSelected ? 'bg-[#9771FD]' : 'bg-white'"
    >
      <slot />
    </div>
    <div
      class="font-medium text-[12px]/[20px]"
      :class="isSelected ? 'text-[#9771FD]' : 'text-[#808191]'"
    >
      {{ props.name }}
    </div>
  </div>
</template>
