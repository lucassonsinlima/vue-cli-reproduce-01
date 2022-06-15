import { createRouter, createWebHashHistory } from 'vue-router';

const FirstC = () => import(/* webpackChunkName: "first" */ '@/views/FirstC.vue');

const SecondC = () => import(/* webpackChunkName: "second" */ '@/views/SecondC.vue');

const ThirdC = () => import(/* webpackChunkName: "third" */ '@/views/ThirdC.vue');

const router = createRouter({
  routes: [
    {
      path: '/first',
      name: 'FirstC',
      component: FirstC,
    },
    {
      path: '/second',
      name: 'SecondC',
      component: SecondC,
    },
    {
      path: '/third',
      name: 'ThirdC',
      component: ThirdC,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: {
        name: 'FirstC',
      },
    },
  ],

  history: createWebHashHistory(),

  scrollBehavior() {
    return { left: 0, top: 0, behavior: 'smooth' };
  },
});

export default router;
