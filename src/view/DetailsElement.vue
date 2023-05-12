<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
const route = useRoute();
const id = route.params.id;
const idM = route.params.idM;

const result = ref(null);
const bigPr = ref(null);

fetch(`https://fakestoreapi.com/products/${id}`).then(
  async (res) => (result.value = await res.json())
);
fetch(`https://fakestoreapi.com/products/${idM}`).then(
  async (res) => (bigPr.value = await res.json())
);
</script>

<template>
  <header>
    <div class="flex flex-col text-center items-center pb-7 mt-12">
      <span class="font-sans font-bold text-5xl leading-10 pb-4"
        >Electronics</span
      >
      <span class="text-lg font-sans font-bold leading-8"
        >Productos destacados</span
      >
    </div>
  </header>
  <div class="grid grid-cols-2 pt-8 mx-28 px-11">
    <img
      class="col-span-1 items-end w-1/2 h-7/10 rounded-lg"
      :src="result.image"
    />

    <div>
      <p class="font-sans font-bold text-lgs leading-10 pb-4">
        {{ result.title }}
      </p>
      <p class="text-lg font-sans leading-8 pb-4">{{ result.price }} CUP</p>
      <p class="text-xs font-bold font-sans leading-8 pb-4">
        (ICON) Este producto está agotado
      </p>
      <p class="text-base font-sans leading-8">{{ result.description }}</p>
    </div>
  </div>
  <div class="flex flex-col text-center items-center pb-7 mt-12">
    <span class="font-sans font-bold text-lg leading-10 pb-4"
      >Sugerencias</span
    >
    <span class="text-base font-sans font-bold leading-8"
      >Productos</span
    >

  </div>
  <div class="flex flex-wrap content-center justify-center space-x-0 pt-8">
        <div class="basis-80 mx-15 justify-center items-center ">
          <img
            class="w-9/10 h-1/2 rounded-lg items-center"
            :src="bigPr.image"/>

          <div
            class="grid grid-cols-2 grid-rows-2 text-left text-sm gap-0 w-1/2"
          >
            
              <p class="truncate col-span-1">{{ bigPr.title }}</p>
              <p class="text-right mx-auto items-center ">
              Icono</p>
              <b>{{ bigPr.price }} CUP</b> 
          

           
          </div>
        </div>
      </div>
    
</template>

<style scoped></style>
