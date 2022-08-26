import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import PageListViews from '../views/PageListViews.vue'
import Register from '../views/RegisterViews.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'list',
    component: PageListViews
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
]

const router = new VueRouter({
  routes
})

export default router
