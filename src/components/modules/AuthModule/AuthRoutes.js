
import {routerPaths} from '../../../router/routerPaths'

const Login = () => import(/* webpackChunkName: "group-login" */ './components/Login/Login.vue')
const SignUp = () => import(/* webpackChunkName: "group-signUp" */ './components/SignUp/SignUp.vue')
const Forgot = () => import(/* webpackChunkName: "group-forgot" */ './components/Forgot/Forgot.vue')

export const AuthRoutes = [
  {
    path: routerPaths.login,
    component: Login,
    meta: {
      layout: {
        name: 'auth',
      },
    },
  },
  {
    path: routerPaths.signUp,
    component: SignUp,
    meta: {
      layout: {
        name: 'auth',
      },
    },
  },
  {
    path: routerPaths.forgot,
    component: Forgot,
    meta: {
      layout: {
        name: 'auth',
      },
    },
  },
]
