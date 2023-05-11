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
      class="grid grid-flow-col grid-cols-2 grid-rows-1 gap-4 w-8/12 h-72 mx-auto"
    >
      <div class="col-span-1 flex flex-wrap justify-center">
        <img :src="producto.image" class="h-full w-1/2 rounded-3xl" />
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
  <div
    class="flex flex-wrap justify-center content-center flex-col w-screen h-64"
  >
    <span class="text-center font-sans text-4xl font-bold w-screen"
      >Sugerencia</span
    >
  </div>
  <div v-if="precioMax">
    <div class="flex flex-wrap justify-center content-center">
      <div class="rounded-xl">
        <img class="w-24 h-32 mx-auto" :src="precioMax.image" />
        <div class="grid grid-cols-3 gap-1 my-3">
          <div class="col-span-2 flex flex-col mx-3">
            <span class="truncate w-44 font-bold" :title="precioMax.title">
              {{ precioMax.title }}</span
            >
            <span class="text-slate-400 font-semibold">{{
              `${precioMax.price}$`
            }}</span>
          </div>
          <div class="col-span-1 flex flex-wrap justify-center content-center">
            <button>
              <img
                class="w-8 h-8 hover:scale-110 hover:"
                src="@/assets/icon/carrito.svg"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const id = route.params.id;
const idMaxPrice = route.params.maxPrecio;

const producto = ref(null);
const precioMax = ref(null);
fetch(`https://fakestoreapi.com/products/${id}`)
  .then(async (res) => (producto.value = await res.json()))
  .then(async (json) => console.log(await json));

fetch(`https://fakestoreapi.com/products/${idMaxPrice}`)
  .then(async (res) => (precioMax.value = await res.json()))
  .then(async (json) => console.log(await json));
</script>

<style scoped></style>
