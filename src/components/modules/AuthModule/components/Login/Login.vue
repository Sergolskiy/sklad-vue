<template>

  <div class="auth-body">

    <SimpleAlert
            class="auth-body__alert"
            @close="closeAlert"
            :color="'green'"
            :type="'success'"
            v-if="openAlert"
    />

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

          <div class="auth-form__field">
            <WhiteInput
                    v-bind:class="{'ui-no-valid': validation.email}"
                    :error="validation.email"
                    :errorTxt="'Enter valid email'"
                    :type="'email'"
                    v-model="email"
                    :label="'E-mail'" />
          </div>

          <div class="auth-form__field">
            <WhiteInput
                    v-bind:class="{'ui-no-valid': validation.password}"
                    :error="validation.password"
                    :type="'password'"
                    :label="'Password'"
                    v-model="password"/>
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

              <v-facebook-login v-model="model" @sdk-init="handleSdkInit" app-id="2611006809174289" />
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
