<template>
  <div class="registration-form">
    <div class="registration-form__inner">
      <div class="registration-form__head">
        <div class="registration-form__head-title">
          <div class="registration-form__head-title-i">
            Sign Up
          </div>
          <div class="registration-form__head-title-desc">
            Please, note that we will need e-mail confirmation afterall fields are filled out
          </div>
        </div>
        <div class="registration-form__head-link">
          <div class="registration-form__head-lang">
            <Language/>
          </div>
          <div class="registration-form__head-social">
            <div class="registration-form__head-social-i">
              <Fb/>
            </div>
          </div>
        </div>
      </div>

      <div class="registration-form__section">
        <div class="registration-form__title">
          Personal Information
        </div>
        <div class="registration-form__row">
          <div class="registration-form__col">
            <div class="registration-form__input">
              <DefaultInput
                  :label="'Name'"
                  :type="text"
              />
            </div>
          </div>
          <div class="registration-form__col">
            <div class="registration-form__input">
              <DefaultInput
                  :label="'Surname'"
                  :type="text"
              />
            </div>
          </div>
          <div class="registration-form__col">
            <div class="registration-form__input">
              <DefaultInput
                  :label="'Phone'"
                  :type="text"
              />
            </div>
          </div>
          <div class="registration-form__col">
            <div class="registration-form__input">
              <DefaultInput
                  :label="'Email'"
                  :type="text"
              />
            </div>
          </div>
          <div class="registration-form__col">
            <div class="registration-form__input">
              <DefaultInput
                  :label="'Create Password'"
                  :type="'password'"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./SignUpForm.js"></script>

<style lang="scss">
  @import "./SignUpForm";
</style>
