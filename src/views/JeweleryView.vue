<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

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
    <div v-if="productos">
      <div
        class="flex flex-wrap justify-center content-center gap-7 my-4 xl:mx-44"
      >
        <div v-for="product in productos" :key="product.id" class="rounded-xl">
          <img
            class="w-64 h-64 mx-auto"
            :src="product.image"
            @click="
              $router.push({
                name: 'productJewelery',
                params: { id: product.id, maxPrecio: precioMax.id }
              })
            "
          />
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

<style scoped></style>
