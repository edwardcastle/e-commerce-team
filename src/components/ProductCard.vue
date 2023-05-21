<template>
  <div>
    <img class="w-64 h-64 mx-auto" :src="product.imageUrl" />
    <div class="grid grid-cols-3 gap-1 my-3">
      <div class="col-span-2 flex flex-col mx-3">
        <span class="truncate w-44 font-bold" :title="product.title">
          {{ product.title }}</span
        >
        <span class="text-slate-400 font-semibold">{{
          `${product.price}$`
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
</template>

<script setup>
const product = defineProps({
  imageUrl: {
    type: String,
    require: true
  },
  title: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  }
});
</script>

<style scoped></style>
