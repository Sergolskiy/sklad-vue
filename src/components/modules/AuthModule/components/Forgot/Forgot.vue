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
            Forgot Password?
          </div>
          <div class="auth-form__subtitle">
            Please enter your email. If the email exists you will receive a recovery link
          </div>

          <div class="auth-form__field">
            <WhiteInput :type="'email'" :placeholder="'E-mail'"/>
          </div>


          <div class="auth-form__btn">
            <div class="auth-form__btn-login">
              <FullButton :value="'Submit'"/>
            </div>
          </div>

          <div class="auth-form__create">
            To enter the platform
            <router-link :to="routerPaths.login" class="site-link">
                <span>
                  LogIn
                </span>
            </router-link>
            or
            <router-link :to="routerPaths.signUp" class="site-link">
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

<script src="./Forgot.js"></script>

<style lang="scss">
@import "./Forgot";
</style>
