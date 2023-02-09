<script lang="ts" setup>
import { useQuery } from "@tanstack/vue-query";
import DogCard from "../components/DogCard.vue";
import axiosInstance from "../lib/axioinstance";

const getRandomDogs = async () => {
  const res = await axiosInstance.get("/breeds/image/random/100");
  return res.data;
};

const { data, isLoading } = useQuery({
  queryKey: ["random-dogs"],
  queryFn: getRandomDogs,
  select: (data) => data.message,
});
</script>

<template>
  <div v-if="isLoading">
    <p>...loading</p>
  </div>
  <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <template v-for="el in data">
      <DogCard :image="el" breed="Husky" />
    </template>
  </div>
</template>
