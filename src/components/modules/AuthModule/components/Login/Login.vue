<template>

  <div class="auth-body">

    <div class="auth-body__alert">
      <div class="auth-alert">

      </div>
    </div>

    <div class="auth-body__form">
      <div class="auth-form">

        <div class="auth-form__inner">
          <div class="auth-form__title">
            Sign In
          </div>
          <div class="auth-form__subtitle">
            Welcome to Ukrainian Delivery Company “SkladUSA”!
            <br>
            Please login to your account to start managing your orders
          </div>

          <div class="auth-form__field"
               v-bind:class="{'ui-no-valid': validation.email}">
            <WhiteInput :type="'email'"  v-model="email" :label="'E-mail'" />
          </div>

          <div class="auth-form__field" v-bind:class="{'ui-no-valid': validation.password}">
            <WhiteInput :type="'password'" :label="'Password'" v-model="password"/>
          </div>

          <div class="auth-form__forgot">
            <router-link :to="$store.getters.GET_PATHS.forgot" class="site-link">
              <span>
                Forgot Your Password?
              </span>
            </router-link>
          </div>


          <div class="auth-form__btn">
            <div class="auth-form__btn-login">
              <FullButton :value="'Login'" v-on:click.native="auth"/>
            </div>
            <div class="auth-form__btn-fb btn-style">
              <Fb/>
            </div>
          </div>

          <div class="auth-form__create">
            New to SkladUSA?
            <router-link :to="$store.getters.GET_PATHS.signUp" class="site-link">
                <span>
                  Create an Account
                </span>
            </router-link>
          </div>
        </div>

      </div>

    </div>

    <BottomLine/>
  </div>

</template>

<script src="./Login.js"></script>

<style lang="scss">
  @import "./Login";
</style>
