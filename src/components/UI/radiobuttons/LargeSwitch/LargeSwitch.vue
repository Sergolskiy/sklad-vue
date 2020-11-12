<template>
  <div class="large-switch">

      <label class="large-switch__label"
             :for="'large-switch1-' + id"
      >
        <input class="large-switch__input"
               type="radio"
               name="name"
               :id="'large-switch1-' + id"
               checked
        >
        <div class="large-switch__btn">
          <span>
            {{ activeValue }}
          </span>
        </div>
      </label>

      <label class="large-switch__label"
             :for="'large-switch2-' + id"
      >
        <input class="large-switch__input"
               type="radio"
               name="name"
               :id="'large-switch2-' + id"
        >
        <div class="large-switch__btn">
          <span>
            {{ inactiveValue }}
          </span>
        </div>
      </label>
  </div>
</template>

<script>
  export default {
    name: "LargeSwitch",

    data () {
      return {
        id: null,
        content: this.value,
      }
    },

    props: [
      'activeValue',
      'inactiveValue',
      'name'
    ],

    mounted () {
      this.id = this._uid
    },

  }
</script>

<style lang="scss">
  .large-switch{
    display: flex;
    border-radius: 5px;
    max-width: 280px;
    overflow: hidden;
    background: #F8F4EE;

    &__input{
      display: none;
    }

    &__label{
      display: flex;
      cursor: pointer;
      width: 100%;
      max-width: 139px;
      align-items: center;
      justify-content: center;
    }

    &__btn{
      padding: 0 5px;
      height: 42px;
      width: 100%;
      display: flex;
      align-items: center;
      max-width: 140px;
      justify-content: center;
      position: relative;

      &:before{
        content: '';
        background: #CD9E64;
        border-radius: 5px;
        width: calc(100% + 18px);
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 0;
        display: block;
        height: 100%;
        opacity: 0;
      }

      span{
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        text-align: center;
        color: #232323;
        position: relative;
        z-index: 2;
      }
    }


    &__input:checked + &__btn{
      background: #CD9E64;
      border-radius: 5px;

      &:before{
        opacity: 1;
      }

      span{
        color: white;
      }
    }



  }
</style>