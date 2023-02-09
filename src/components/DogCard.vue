<script setup lang="ts">
type DogCardProps = {
  image: string;
  breed: string;
};
const props = defineProps<DogCardProps>();
</script>

<template>
  <div class="dog-card">
    <img
      :src="props.image"
      alt="dog"
      class="w-full h-full object-cover transition-all"
      lazy
    />
    <div class="dog-content flex flex-col justify-evenly items-center">
      <h2 class="text-3xl capitalize">{{ props.breed }}</h2>
      <router-link
        class="bg-accent text-white py-2 px-4 text-sm rounded-full"
        :to="props.breed"
        >See more</router-link
      >
    </div>
  </div>
</template>
