<script lang="ts" setup>
import useFetchBreeds from "../composables/useFetchBreeds";

const { data, isLoading } = useFetchBreeds();
</script>

<template>
  <div class="container flex flex-col py-6 space-y-12">
    <router-link to="/" class="">
      <img src="/logo.svg" alt="logo" class="w-[250px] block mx-auto" />
    </router-link>

    <!-- breeds list -->
    <div class="flex items-center gap-4 container overflow-auto">
      <router-link :to="breed" v-for="breed in data" class="link" :key="breed">
        {{ breed }}
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
.link {
  @apply capitalize border py-2 px-4 rounded-full;

  &.router-link-active.router-link-exact-active {
    @apply bg-accent border-accent;
  }
}
</style>
