import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Cats from '../views/Cats.vue'
// import Dogs from '../views/Dogs.vue'
// import Pet from '../views/Pet.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cats',
    name: 'Cat',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cats.vue')
  },
  {
    path: '/dogs',
    name: 'Dogs',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dogs.vue')
  },
  {
    path: '/pets/:species/:id',
    name: 'Pet',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pet.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
