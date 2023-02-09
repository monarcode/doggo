<script lang="ts" setup>
import SearchDogs from "./SearchDogs.vue";
import ViewDogs from "./ViewDogs.vue";

const val = false;
</script>

<template>
  <component :is="val ? ViewDogs : SearchDogs"></component>
</template>
