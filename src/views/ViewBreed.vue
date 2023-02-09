<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import DogCard from "../components/DogCard.vue";
import axiosInstance from "../lib/axioinstance";

const route = useRoute();
const breed = ref(route.params.breed);
let data = ref([]);
let isLoading = ref(false);

onMounted(async () => {
  isLoading.value = true;

  const res = await axiosInstance
    .get(`/breed/${breed.value}/images`)
    .then((res) => res.data);

  data.value = res.message;

  isLoading.value = false;
});
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
