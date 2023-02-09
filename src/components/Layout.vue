<script lang="ts" setup>
import { searchVal } from "../store/searchInput";
import Button from "./Button.vue";
</script>

<template>
  <div class="container flex flex-col py-6 space-y-12">
    <div class="">
      <img src="/logo.svg" alt="logo" class="w-[250px] block mx-auto" />
    </div>

    <!-- search input -->
    <div
      class="border border-light/25 rounded-full w-full max-w-[600px] mx-auto p-1 [&:has(input:focus)]:border-accent transition-all flex items-center"
    >
      <input
        type="search"
        name="search-doggo"
        id="search-doggo"
        placeholder="Looking for something?"
        class="h-full w-full bg-transparent placeholder:text-light placeholder:text-sm focus:outline-0 pl-6"
        v-model="searchVal"
      />
      <Button label="Find on Doggo" />
    </div>
    <router-view></router-view>
  </div>
</template>
