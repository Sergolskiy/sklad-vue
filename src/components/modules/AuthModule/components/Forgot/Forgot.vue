<template>

  <div class="auth-body">

    <div class="auth-body__alert">
      <div class="auth-alert">

      </div>
    </div>

    <div class="auth-body__form">
      <div class="auth-form">

        <div class="auth-form__inner" v-if="!forgotComplete">
          <div class="auth-form__title">
            Forgot Password?
          </div>
          <div class="auth-form__subtitle">
            Please enter your email. If the email exists you will receive a recovery link
          </div>

          <div class="auth-form__field">
            <WhiteInput
                    v-bind:class="{'ui-no-valid': validation.email}"
                    :errorTxt="'Enter valid email'"
                    :error="validation.email"
                    :type="'email'"
                    v-model="email"
                    :label="'E-mail'" />
          </div>


          <div class="auth-form__btn">
            <div class="auth-form__btn-login">
              <FullButton v-on:click.native="forgotSubmit" :value="'Submit'"/>
            </div>
          </div>

          <div class="auth-form__create">
            To enter the platform
            <router-link :to="$store.getters.GET_PATHS.login" class="site-link">
                <span>
                  LogIn
                </span>
            </router-link>
            or
            <router-link :to="$store.getters.GET_PATHS.signUp" class="site-link">
                <span>
                  Create an Account
                </span>
            </router-link>

          </div>
        </div>

        <ForgotComplete v-if="forgotComplete" />

      </div>

    </div>

    <BottomLine/>
  </div>

</template>

<script src="./Forgot.js"></script>

<style lang="scss">
@import "./Forgot";
</style>
