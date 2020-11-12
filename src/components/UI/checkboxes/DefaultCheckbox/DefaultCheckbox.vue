<template>
  <div class="default-checkbox">
    <input type="checkbox"
           class="default-checkbox__input"
           :id="'default-checkbox-' + id"
           :checked="checked"
           :disabled="disabled"
    >
    <label :for="'default-checkbox-' + id" class="default-checkbox__label">
      {{ label }}
    </label>

    <div class="default-checkbox__help-text">
      {{ helpText }}
    </div>

  </div>
</template>

<script>
  export default {
    name: "DefaultCheckbox",

    data () {
      return {
        id: null,
        content: this.value,
      }
    },

    props: [
      'label',
      'checked',
      'helpText',
      'disabled'
    ],

    mounted () {
      this.id = this._uid
    },
  }
</script>

<style lang="scss">


  .default-checkbox{
    display: flex;
    position: relative;

    &__input{
      display: none;
    }

    &__label{
      position: relative;
      padding-left: 24px;
      cursor: pointer;


      &:before{
        content: '';
        position: absolute;
        left: 0;
        top: 1px;
        width: 15px;
        height: 15px;
        border: 1px solid #BBAD9C;
        box-sizing: border-box;
        border-radius: 3px;
        display: flex;
      }


      &:after{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 15px;
        height: 15px;
        border: 1px solid transparent;
        border-radius: 3px;
        display: flex;
        background-image: url("../../../../assets/img/UI-group/white-check.svg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 11px;
        opacity: 0;
      }
    }

    &__input:checked + &__label{
      &:before{
        background-color: #8F7A61;
        border-color: #8F7A61;
      }

      &:after{
        opacity: 1;
      }
    }

    &__input:disabled + &__label{

      &:before{
        opacity: 0.4;
      }
    }

    &__help-text{
      position: absolute;
      top: 100%;
      left: 24px;
      font-size: 12px;
      line-height: 18px;
      color: #8F7A61;
    }
  }

</style>