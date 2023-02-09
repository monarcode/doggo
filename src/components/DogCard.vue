<script setup lang="ts">
import { computed } from "vue";

type DogCardProps = {
  image: string;
  breed: string;
};
const props = defineProps<DogCardProps>();

const getBreedName = (str: string) => {
  return str.split("/")[4];
};
const breedname = computed(() => {
  return getBreedName(props.image);
});
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
      <h2 class="text-2xl capitalize whitespace-nowrap">
        {{ breedname }}
      </h2>
      <router-link
        class="bg-accent text-white py-2 px-4 text-sm rounded-full"
        :to="breedname"
        >See more</router-link
      >
    </div>
  </div>
</template>
