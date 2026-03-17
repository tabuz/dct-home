<script setup lang="ts">
const { data: page } = await useAsyncData("index", () => {
  return queryCollection("content").path("/").first();
});
</script>

<template>
  <div>
    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>
