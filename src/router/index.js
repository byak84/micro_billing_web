import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'About',
    meta: {layout: 'main'},
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/clients',
    name: 'clients',
    meta: {layout: 'main'},
    component: () => import(/* webpackChunkName: "about" */ '../views/clients.vue')
  },
  {
    path: '/payments',
    name: 'payments',
    meta: {layout: 'main'},
    component: () => import(/* webpackChunkName: "about" */ '../views/payments.vue')
  },
  {
    path: '/tarifs',
    name: 'tarifs',
    meta: {layout: 'main'},
    component: () => import(/* webpackChunkName: "about" */ '../views/tarifs.vue')
  },
  {
    path: '/streets',
    name: 'streets',
    meta: {layout: 'main'},
    component: () => import(/* webpackChunkName: "about" */ '../views/streets')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
