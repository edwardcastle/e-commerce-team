<script setup>
import { ref } from 'vue'

const result = ref(null)
fetch('https://fakestoreapi.com/products/category/women\'s clothing')
  .then((res) => res.json())
  .then((json) => (result.value = json))
</script>

<template>
  <div>
    <RouterView />
    {{ result }}
  </div>
</template>

<style scoped></style>
