<template>
  <label :for="'white-input-' + id" class="white-input-wrap" :class="{ active: activeInput || value.length > 0 }">
    <input
            :id="'white-input-' + id"
            :type="checkType()"
            class="white-input"
            v-on:input="handleInput($event.target.value)"
            :value="value"
            @focus="activeInput = true"
            @blur="activeInput = false"
    >
    <span class="white-input-wrap__label"
          v-if="label"
    >
      {{ label }}
    </span>
    <span class="white-input-wrap__pass" @click="showPass" v-if="type === 'password'"></span>
  </label>
</template>

<script>
  export default {
    name: "WhiteInput",

    data () {
      return {
        id: null,
        isShowPass: false,
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
      },

    }
  }
</script>

<style lang="scss">
  @import "../../../../scss/mixins/mixins";

  .white-input-wrap{
    display: block;
    position: relative;

    input{
      background: #FFFFFF;
      border: 1px solid #BBAD9C;
      box-sizing: border-box;
      border-radius: 5px;
      height: 55px;
      font-size: 14px;
      line-height: 16px;
      padding-left: 25px;
      width: 100%;

      &::placeholder{
        font-size: 14px;
        line-height: 16px;
        color: #BBAD9C;
      }
    }

    &__label{
      position: absolute;
      left: 27px;
      top: 21px;
      font-size: 14px;
      line-height: 16px;
      color: #BBAD9C;
      transition: 0.3s;
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

    &.active .white-input-wrap__label{
      top: -7px;
      left: 19px;
      background: white;
      padding: 0 2px;
    }
  }



  /*@include from-550{
    .white-input-wrap{
      display: block;
    }
  }*/
</style>
