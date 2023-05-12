import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/electronics',
      name: 'Electronics',
      component: () => import('../view/ElectronicsView.vue')
    },
    {
      path: '/electronics/:id/:idM',
      name: 'Details',
      component: () => import('../view/DetailsElement.vue')
    }
  ]
});

export default router;
