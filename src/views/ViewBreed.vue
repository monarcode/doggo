<script setup lang="ts">
import { useRoute } from "vue-router";
import useFetchByBreed from "../composables/useByBreed";
import DogCard from "../components/DogCard.vue";

const route = useRoute();
const breed = route.params.breed;

const { data, isLoading } = useFetchByBreed(breed as string);
</script>

<template>
  <div v-if="isLoading">
    <p>...loading</p>
  </div>
  <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <template v-for="dog in data">
      <DogCard :image="dog" />
    </template>
  </div>
</template>
