<template>
  <label :for="'default-input-' + id" class="default-input-wrap" >
    <span class="default-input__label"> {{ label }}</span>
    <input :id="'default-input-' + id" :placeholder="placeholder" :type="checkType()" class="default-input">
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
      }
    },

    props: [
      'type',
      'placeholder',
      'label'
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
      height: 42px;
      font-size: 14px;
      line-height: 16px;
      padding-left: 25px;
      width: 100%;
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
  }



  /*@include from-550{
    .white-input-wrap{
      display: block;
    }
  }*/
</style>
