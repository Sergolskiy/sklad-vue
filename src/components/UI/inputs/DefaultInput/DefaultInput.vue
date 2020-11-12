<template>
  <label :for="'default-input-' + id" class="default-input-wrap" :class="{ active: activeInput || value.length > 0 }">
    <input
        :id="'default-input-' + id"
        :type="checkType()"
        class="default-input"
        v-on:input="handleInput($event.target.value)"
        :value="value"
        @focus="activeInput = true"
        @blur="activeInput = false"
    >
    <span class="default-input-wrap__label"
          v-if="label"
    >
      {{ label }}
    </span>
    <span class="default-input-wrap__pass" @click="showPass" v-if="type === 'password'"></span>
  </label>
</template>

<script>
  export default {
    name: "DefaultInput",

    data () {
      return {
        id: null,
        isShowPass: false,
        content: this.value,
        activeInput: false,
      }
    },

    props: [
      'type',
      'label',
      'placeholder',
      'value',
    ],

    mounted () {
      this.id = this._uid
    },

    methods: {
      showPass() {
        this.isShowPass = !this.isShowPass
      },

      checkType() {
        if(this.type === 'password' && this.isShowPass){
          return 'text'
        } else {
          return this.type
        }
      },

      handleInput (value) {
        this.$emit('input', value)
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../../scss/mixins/mixins";


  .default-input-wrap{
    display: block;
    position: relative;

    input{
      font-size: 14px;
      line-height: 16px;
      width: 100%;

      padding-left: 16px;
      height: 42px;
      background: #F8F4EE;
      border: 1px solid #BBAD9C;
      box-sizing: border-box;
      border-radius: 5px;

      &::placeholder{
        font-size: 14px;
        line-height: 16px;
        color: #BBAD9C;
      }
    }

    &__label{
      position: absolute;
      left: 16px;
      top: 13px;
      font-size: 14px;
      line-height: 16px;
      color: #BBAD9C;
      transition: 0.15s all;
    }


    &__pass{
      display: block;
      width: 25px;
      height: 10px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 20px;
      background: url("../../../../assets/img/common/pass-show.svg") center center no-repeat;
      cursor: pointer;
    }

    &.active .default-input-wrap__label{
      top: -7px;
      background: white;
      background: linear-gradient(0deg, #F8F4EE 0%, #FFFFFF 105.56%);
      padding: 0 2px;
    }

    &.active input{
      border-color: #CD9E64;
    }
  }



</style>
