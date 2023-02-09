import { ref } from "vue";

export const searchVal = ref("");
export const clearSearch = () => (searchVal.value = "");
