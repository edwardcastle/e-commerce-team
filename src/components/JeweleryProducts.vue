<template>
  <div class="flex flex-wrap justify-center content-center gap-7 my-4 xl:mx-44">
    <div
      v-for="product in props.productos"
      :key="product.id"
      class="rounded-xl"
    >
      <img
        class="w-64 h-64 mx-auto"
        :src="product.image"
        @click="
          $router.push({
            name: 'productJewelery',
            params: { id: product.id, maxPrecio: props.precioMax.id }
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
</template>

<script setup>
const props = defineProps({
  productos: {
    type: Array,
    required: true
  },
  precioMax: {
    type: Object,
    required: true
  }
});
</script>

<style scoped></style>
