<script lang="ts" setup>
import SearchDogs from "./SearchDogs.vue";
import ViewDogs from "./ViewDogs.vue";
import { searchVal } from "../store/searchInput";
</script>

<template>
  <component :is="searchVal.length > 0 ? SearchDogs : ViewDogs" />
</template>
