<script setup lang="ts">
type ButtonProps = {
  label: string;
};
const props = defineProps<ButtonProps>();
</script>

<template>
  <button
    class="bg-accent text-sm text-light py-3 px-6 rounded-full whitespace-nowrap active:scale-95 transition-all"
  >
    {{ label }}
  </button>
</template>
