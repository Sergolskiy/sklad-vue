<template>
  <div class="forgot-complete">
    <div class="auth-form__title">
      Thank You!
    </div>
    <div class="auth-form__subtitle">
      Please check your email. We have sent the recovery link
    </div>

    <div class="forgot-complete__question">
      No Link on Email?
    </div>

    <div class="forgot-complete__items">
      <div class="forgot-complete__item">
        Wait for 5 minutes
      </div>
      <div class="forgot-complete__item">
        Check spam fold on your Email
      </div>
      <div class="forgot-complete__item">
        Contact our support team at
      </div>
    </div>

    <div class="forgot-complete__contacts">
      <div class="forgot-complete__contacts-item">
        <p>
          <a href="tel:+16128869810">+1 612 886 9810</a>
        </p>
        <p>
          <a href="tel:+375336904020">MTC: +375 33 690 40 20</a> <br>
          <a href="tel:+375296704020">A1: +375 29 670 40 20</a>
        </p>
        <p>
          <a href="tel:+380961862986">+38 (096) 186 29 86</a>
        </p>
      </div>

      <div class="forgot-complete__contacts-item">
        <a href="mailto:support@skladUSA.com">support@skladUSA.com</a>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "ForgotComplete"
  }
</script>

<style lang="scss">
  @import "../../../../../../scss/colors";
  @import "../../../../../../scss/mixins/mixins";

  .forgot-complete{
    padding-left: 75px;
    margin-right: -30px;
    position: relative;

    /*counter: counter;*/

    &:after{
      content: "";
      display: block;
      position: absolute;
      top: -5px;
      left: -50px;
      width: 100px;
      height: 100px;
      background: url("../../../../../../assets/img/login-group/forgot-check.svg") center center no-repeat;
    }

    &__question{
      font-weight: 500;
      font-size: 24px;
      line-height: 149.69%;
      margin-bottom: 25px;
    }

    &__items{

    }

    &__item{
      display: flex;
      align-items: center;
      font-weight: 500;
      font-size: 14px;
      line-height: 149.69%;
      margin-bottom: 15px;
      counter-increment: section;


      &:before{

        content: counter(section);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        border: 2px solid $brown;
        border-radius: 50%;
        color: $brown;
        margin-right: 15px;
        padding-top: 1px;
      }

      &:last-child{
        margin-bottom: 0;
      }
    }

    &__contacts{
      margin-top: 20px;
      margin-left: 44px;
    }

    &__contacts-item{

      p{
        margin-top: 0;
        margin-bottom: 12px;
      }

      a{
        font-weight: bold;
        font-size: 14px;
        line-height: 18px;
      }

    }

  }
</style>
