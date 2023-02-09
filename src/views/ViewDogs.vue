<script lang="ts" setup>
import DogCard from "../components/DogCard.vue";
import useFetchRandom from "../composables/useFetchRandom";

const { data, isLoading } = useFetchRandom();
</script>

<template>
  <div v-if="isLoading">
    <p>...loading</p>
  </div>
  <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <template v-for="el in data">
      <DogCard show-link :image="el" breed="Husky" />
    </template>
  </div>
</template>
