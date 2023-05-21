<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import JeweleryProducts from '@/components/JeweleryProducts.vue';

const router = useRouter();
const productos = ref(null);
const precioMax = ref(null);

fetch('https://fakestoreapi.com/products/category/jewelery')
  .then(async (res) => (productos.value = await res.json()))
  .then(
    async (respon) =>
      (precioMax.value = productos.value.reduce((hightPrice, actualPrice) => {
        return hightPrice.price > actualPrice.price ? hightPrice : actualPrice;
      }))
  )
  .then(console.log(precioMax));
</script>

<template>
  <header>
    <div
      class="flex flex-wrap justify-center content-center flex-col w-screen h-36"
    >
      <span class="text-center font-sans text-4xl font-bold">Jewelery</span>
      <span class="text-center font-sans font-semibold"
        >Productos destacados</span
      >
    </div>
  </header>

  <section>
    <div v-if="productos && precioMax">
      <JeweleryProducts :productos="productos" :precioMax="precioMax" />
    </div>
  </section>
</template>

<style scoped></style>
