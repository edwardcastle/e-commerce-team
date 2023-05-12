<script setup>
import { ref } from 'vue';
const pelectronic = ref(null);
const bige = ref(null);
fetch('https://fakestoreapi.com/products/category/electronics')
  .then(async (res) => (pelectronic.value = await res.json()))
  .then(
    async () =>
      (bige.value = pelectronic.value.reduce((hightPrice, actualPrice) => {
        return hightPrice.price > actualPrice.price ? hightPrice : actualPrice;
      }))
  );
</script>

<template>
  <header>
    <div class="flex flex-col text-center items-center pb-7 mt-12">
      <span class="font-sans font-bold text-5xl leading-10 pb-4">Electronics</span>
      <span class="text-lg font-sans font-bold leading-8">Productos destacados</span>
    </div>
  </header>
  <div>
    <div v-if="pelectronic">
      <div class="flex flex-wrap content-center justify-center space-x-0 pt-8">
        <div class="w-1/6 mx-4 justify-center "
          
          v-for="(product, index) in pelectronic"
          :key="index"
        >
          <img
            class="w-1/2 h-1/2 rounded-lg items-center"
            :src="product.image"
            @click="
              $router.push({
                name: 'Details',
                params: { id: product.id, idM: bige.id }
              })
            "
          />

          <div
            class="grid grid-cols-2 grid-rows-2 text-left text-sm gap-0 w-1/2"
          >
            
              <p class="truncate col-span-1">{{ product.title }}</p>
              <p class="text-right mx-auto items-center ">
              Icono</p>
              <b>{{ product.price }} CUP</b> 
          

           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
