<script lang="ts" setup>
import useFetchBreeds from "../composables/useFetchBreeds";

const { data, isLoading } = useFetchBreeds();
</script>

<template>
  <div class="container flex flex-col py-6 space-y-12">
    <div class="">
      <img src="/logo.svg" alt="logo" class="w-[250px] block mx-auto" />
    </div>

    <!-- breeds list -->
    <div class="flex items-center gap-4 container overflow-auto">
      <button
        v-for="breed in data"
        class="capitalize border py-2 px-4 rounded-full"
      >
        {{ breed }}
      </button>
    </div>
    <router-view></router-view>
  </div>
</template>
