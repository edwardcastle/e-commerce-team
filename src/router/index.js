import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/category/jewelery',
      name: 'jewelery',
      component: () => import('@/views/JeweleryView.vue')
    },
    {
      path: '/category/jewelery/:id/:maxPrecio',
      name: 'productJewelery',
      component: () => import('@/views/JeweleryProductView.vue')
    }
  ]
});

export default router;
