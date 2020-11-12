<template>
  <div class="language-select">
      <span class="language-select__item" :class="{active: activeLang === 'ua'}">
        Укр
      </span>
      <span class="language-select__item" :class="{active: activeLang === 'ru'}">
        Рус
      </span>
      <span class="language-select__item" :class="{active: activeLang === 'en'}">
        En
      </span>
  </div>
</template>

<script src="./Language.js"></script>

<style lang="scss">
  @import "./Language";
</style>