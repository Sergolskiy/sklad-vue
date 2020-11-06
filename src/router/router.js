import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
// import Header from '../components/templates/Header/Header.vue'
// import Home from '../components/Home.vue'

import {DashboardRoutes} from '../components/containers/DashboardModule/DashboardRoutes'

Vue.use(VueRouter)

const Home = () => import(/* webpackChunkName: "group-foo" */ '../components/Home.vue')


const routes = [
  {
    path: '/',
    component: HelloWorld,
    children: DashboardRoutes,
    meta: {
      layout: {
        name: 'auth',
      },
    },
  },
  { path: '/home', component: Home,


  },
]

export const router = new VueRouter({
  mode: 'history',
  routes
})


