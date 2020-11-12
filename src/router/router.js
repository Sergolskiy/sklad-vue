import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'

import {routerPaths} from './routerPaths'

Vue.use(VueRouter)


// *************  Module Include ************ //

const Home = () => import(/* webpackChunkName: "group-home" */ '../components/Home.vue')
const Auth = () => import(/* webpackChunkName: "group-auth" */ '../components/modules/AuthModule/Auth.vue')
const Registration = () => import(/* webpackChunkName: "group-auth" */ '../components/modules/RegistrationModule/Registration.vue')

// *************  End Module Include ************ //

// *************  Module Routes Include ************ //

import {DashboardRoutes} from '../components/modules/DashboardModule/DashboardRoutes'
import {AuthRoutes} from '../components/modules/AuthModule/AuthRoutes'

// *************  End Module Routes Include ************ //

const routes = [
  {
    path: '/',
    component: HelloWorld,
    children: DashboardRoutes,
  },

  {
    path: '/home', component: Home,
  },

  {
    path: routerPaths.auth,
    component: Auth,
    redirect: routerPaths.login,
    children: AuthRoutes,
    meta: {
      layout: {
        name: 'auth',
      },
    },
  },

  {
    path: routerPaths.signUp,
    component: Registration,
    meta: {
      layout: {
        name: 'auth',
      },
    },
  },

]

export const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {

  if (to.name === 'login' && localStorage.getItem("accessToken")) {
    // next(routerPaths.auth)
    console.log(43534);

  }


  if (window.localStorage.token === undefined && to.path.indexOf(routerPaths.auth) !== 0 ){
    next(routerPaths.auth)
  }
  else next()
})
