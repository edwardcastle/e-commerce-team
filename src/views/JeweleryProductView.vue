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
  <div v-if="producto">
    <div
      class="grid grid-flow-col grid-cols-2 grid-rows-1 gap-4 w-8/12 mx-auto"
    >
      <div class="col-span-1 flex flex-wrap justify-center">
        <img :src="producto.image" class="w-1/2 h-auto rounded-3xl" />
      </div>
      <div class="col-span-1 py-5">
        <span
          class="h-10 font-bold text-base leading-32 flex items-center tracking-wider text-black"
          >{{ producto.title }}</span
        >
        <span
          class="h-10 text-lg leading-32 flex items-center tracking-wider py-4"
          >{{ ` ${producto.price} CUP` }}</span
        >
        <span class="flex items-center"
          ><img class="w-4 h-4" src="@/assets/icon/warnig.svg" alt="" />
          <p
            class="h-10 font-bold text-sm leading-32 flex items-center tracking-wider"
          >
            Este producto esta acabado
          </p>
        </span>
        <span class="h-10 text-sm leading-32 tracking-wider">
          {{ producto.description }}
        </span>
        <div id="social-network" class="flex flex-wrap gap-3 items-center h-10">
          <button>
            <img
              class="w-4 h-4 hover:scale-110"
              src="@/assets/icon/gmail.svg"
              alt=""
            />
          </button>
          <button>
            <img
              class="w-4 h-4 hover:scale-110"
              src="@/assets/icon/facebook.svg"
              alt=""
            />
          </button>
          <button>
            <img
              class="w-4 h-4 hover:scale-110"
              src="@/assets/icon/twitter.svg"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  </div>
  <div></div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const id = route.params.id;

const producto = ref(null);

fetch(`https://fakestoreapi.com/products/${id}`)
  .then(async (res) => (producto.value = await res.json()))
  .then(async (json) => console.log(await json));
</script>

<style scoped></style>
