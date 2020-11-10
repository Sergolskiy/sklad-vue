<template>
  <div class="login-page auth-wrap">


    <div class="auth-head">
      <div class="auth-head__logo">
        <img src="/img/login-group/login-logo.png" alt="alt">
      </div>
    </div>

    <router-view></router-view>

  </div>

</template>

<script>
  export default {
    name: "Auth"
  }
</script>

<style scoped>

</style>
