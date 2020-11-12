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
                  :type="'text'"
                  v-model="name"
              />
            </div>
          </div>
          <div class="registration-form__col">
            <div class="registration-form__input">
              <DefaultInput
                  :label="'Surname'"
                  :type="'text'"
                  v-model="surName"
              />
            </div>
          </div>
          <div class="registration-form__col">
            <div class="registration-form__input">
              <DefaultInput
                  :label="'Phone'"
                  :type="'text'"
                  v-model="phone"
              />
            </div>
          </div>
          <div class="registration-form__col">
            <div class="registration-form__input">
              <DefaultInput
                  :label="'Email'"
                  :type="'email'"
                  v-model="email"
              />
            </div>
          </div>
          <div class="registration-form__col">
            <div class="registration-form__input">
              <DefaultInput
                  :label="'Create Password'"
                  :type="'password'"
                  v-model="createPassword"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="registration-form__section">
        <div class="registration-form__title">
          Location
        </div>
        <div class="registration-form__row">
          <div class="registration-form__col">
            <div class="registration-form__input">
              <DefaultInput
                  :label="'Address'"
                  :type="'text'"
                  v-model="address"
              />
            </div>
          </div>
          <div class="registration-form__col">
            <div class="registration-form__input">
              <DefaultInput
                  :label="'City'"
                  :type="'text'"
                  v-model="city"
              />
            </div>
          </div>
          <div class="registration-form__col">
            <div class="registration-form__input">
              <DefaultInput
                  :label="'State / District'"
                  :type="'text'"
                  v-model="stateDistrict"
              />
            </div>
          </div>
          <div class="registration-form__col">
            <div class="registration-form__input">
              <v-select
                  :options="options"
              >
                <template #header>
                  <div class="v-select__label">Country</div>
                </template>
              </v-select>
            </div>
          </div>
          <div class="registration-form__col">
            <div class="registration-form__input">
              <DefaultInput
                  :label="'Post Number'"
                  :type="'text'"
                  v-model="postNumber"
              />
            </div>
          </div>
        </div>
      </div>



      <div class="registration-form__section">
        <div class="registration-form__row">
          <div class="registration-form__col">
            <div class="registration-form__title">
              Account Details
            </div>

            <div class="registration-form__input">
              <DefaultInput
                  :label="'Login / Shop'"
                  :type="'text'"
                  v-model="loginShop"
              />
            </div>
          </div>
          <div class="registration-form__col">
            <div class="registration-form__title">
              Fullfilmetn (choose at least 1 option)

              <span class="registration-form__title-prompt">
                This field is required
              </span>
            </div>
            <div class="registration-form__inputs-row">
              <div class="registration-form__inputs-col">
                <DefaultCheckbox
                    :label="'By Amazon'"
                    v-model="checkedAmazon"
                />
              </div>
              <div class="registration-form__inputs-col">
                <DefaultCheckbox
                    :label="'By Merchant'"
                    v-model="checkedMerchant"
                    :helpText="'Ebay, Etsy, Online Store'"
                />
              </div>
            </div>
          </div>
          <div class="registration-form__col">
            <div class="registration-form__title">
              Functionality
            </div>

            <div class="registration-form__input">
              <LargeSwitch
                :activeValue="'Full'"
                :inactiveValue="'Simplified'"
                :name="'radioFunctionality'"
                v-model="checkedFunctionality"
              />
            </div>
          </div>
        </div>
        <div class="registration-form__agree">
          <DefaultCheckbox
              :label="'I Agree with Terms & Conditions and Privacy Policy of SkladUSA'"
              v-model="registrationAgrre"
          />
        </div>
      </div>


      <div class="registration-form__section-bottom">
        <div class="registration-form__section-bottom-link">
          <router-link class="registration-form__section-bottom-link-i"
                       :to="$store.getters.GET_PATHS.login"
          >
            Have an Account? LogIn
          </router-link>
        </div>
        <div class="registration-form__section-bottom-btn">
          <MainButton
              class="registration-form__section-bottom-btn-i"
              :value="'Create Account'"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./SignUpForm.js"></script>

<style lang="scss">
  @import "./SignUpForm";
</style>
