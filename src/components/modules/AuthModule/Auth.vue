<template>
  <div class="login-page auth-wrap">


    <div class="auth-head">
      <div class="auth-head__logo">
        <router-link :to="$store.getters.GET_PATHS.login">
          <img src="/img/login-group/login-logo.png" alt="alt">
        </router-link>
      </div>
    </div>

    <router-view></router-view>

  </div>

</template>

<script>
  import {routerPaths} from '../../../router/routerPaths'

  export default {
    name: "Auth",

    data() {
      return{
        routerPaths: routerPaths,
      }
    },
  }
</script>

<style scoped>

</style>
