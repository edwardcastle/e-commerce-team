<template>
  <header class="bg-slate-100 border-2">
    <div class="flex flex-wrap h-96 my-4 xl:mx-52 lg:mx-36 md:mx-20">
      <div
        class="xl:w-2/3 lg:w-2/3 md:w-1/2 sm:w-1/2 grid grid-cols-1 content-center"
      >
        <span class="font-sans text-4xl font-bold"
          >Categorías <br />
          destacadas</span
        >
        <br />
        <span class="font-sans font-normal"
          >Encuentra lo que estas buscando en <br />
          nuestras categorías</span
        >
      </div>
      <div
        class="xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 grid grid-cols-2 col-span-1 sm:gap-7 md:gap-9 lg:gap-10 xl:gap-11"
      >
        <div class="col-span-1 w-40 h-40">
          <img
            class="w-36 h-36 rounded-xl"
            src="@/assets/icon/div.overlay.jpg"
            alt=""
          />
          <span class="flex flex-grow justify-center content-center pt-2"
            >Electronica</span
          >
        </div>
        <div class="col-span-1 w-40 h-40">
          <img
            class="w-36 h-36 rounded-xl"
            src="@/assets/icon/div.overlay (1).jpg"
            alt=""
          />
          <span class="flex flex-grow justify-center content-center pt-2"
            >Ropa de Hombre</span
          >
        </div>
        <div class="col-span-1 w-40 h-40">
          <img
            class="w-36 h-36 rounded-xl"
            src="@/assets/icon/div.overlay (2).jpg"
            alt=""
          />
          <span class="flex flex-grow justify-center content-center pt-2"
            >Joyeria</span
          >
        </div>
        <div class="col-span-1 w-40 h-40">
          <img
            class="w-36 h-36 rounded-xl"
            src="@/assets/icon/div.overlay (3).jpg"
            alt=""
          />
          <span class="flex flex-grow justify-center content-center pt-2"
            >Ropa de Mujer</span
          >
        </div>
      </div>
    </div>
  </header>

  <section>
    <div v-if="productos">
      <div
        class="flex flex-wrap justify-center content-center gap-7 my-4 xl:mx-44"
      >
        <div v-for="product in productos" :key="product.id" class="rounded-xl">
          <img class="w-64 h-64 mx-auto" :src="product.image" />
          <div class="grid grid-cols-3 gap-1 my-3">
            <div class="col-span-2 flex flex-col mx-3">
              <span class="truncate w-44 font-bold" :title="product.title">
                {{ product.title }}</span
              >
              <span class="text-slate-400 font-semibold">{{
                `${product.price}$`
              }}</span>
            </div>
            <div
              class="col-span-1 flex flex-wrap justify-center content-center"
            >
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
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const productos = ref(null);
fetch(`https://fakestoreapi.com/products`).then(async (res) => {
  productos.value = await res.json();
});
</script>

<style scoped></style>
