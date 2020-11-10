<template>
  <div class="auth-body__form-bottom">
    <div class="auth-form-bottom">
      <div class="auth-form-bottom__lang">
        <div class="auth-lang">
          <span class="auth-lang__item" :class="{active: activeLang === 'ua'}">
            Укр
          </span>
          <span class="auth-lang__item" :class="{active: activeLang === 'ru'}">
            Рус
          </span>
          <span class="auth-lang__item" :class="{active: activeLang === 'en'}">
            En
          </span>
        </div>
      </div>

      <div class="auth-form-bottom__copyright">
        Copyright © 2020SkladUsa.com Inc

        <span>
          All Rights Reserved
        </span>
      </div>
    </div>

    <div class="auth-body__form-img">
      <div class="auth-form-img">
        <Vase/>
      </div>
    </div>
  </div>


</template>

<script src="./BottomLine.js"></script>

<style lang="scss">
@import "./BottomLine";
</style>
