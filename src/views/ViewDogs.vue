<script lang="ts" setup>
import DogCard from "../components/DogCard.vue";
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <DogCard image="/dog.jpg" breed="Husky" />
  </div>
</template>
