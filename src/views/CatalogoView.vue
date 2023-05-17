<template>
  <div></div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const id = route.params.id;
const idMaxPrice = route.params.maxPrecio;

const producto = ref(null);
const precioMax = ref(null);
fetch(`https://fakestoreapi.com/products`)
  .then(async (res) => (producto.value = await res.json()))
  .then(async (json) => console.log(await json));
</script>

<style scoped></style>
