<template>
  <div class="modal-component" ref="modalWrap" @click="closePopupWrap" v-bind:class="{open: show}">
    <div class="modal-component__inner">
      <div class="modal-component__content">
        <span class="btn-close modal-component__close" @click="close" aria-label="close modal"></span>
        <div class="modal-component__header" v-bind:class="{'modal-component__header--left': (headerType === 'left')}">
          <slot name="header">

          </slot>
        </div>
        <div class="modal-component__body">
          <slot name="body">

          </slot>
        </div>
        <div class="modal-component__footer">
          <slot name="footer">

          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Modal",

    data: function () {
      return {
        show: false,
      }
    },

    methods: {
      close() {
        this.$emit('close');
      },

      closePopupWrap(){
        if( event.target == this.$refs.modalWrap){
          this.$emit('close');
        }
      }
    },

    props:[
      'headerType'
    ],

    mounted() {
      setTimeout(() => {
        this.show = true;
      }, 50);
    }
  }
</script>

<style lang="scss">

  .modal-component{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(20px);
    transition: .3s all;
    overflow-y: auto;
    opacity: 0;
    z-index: -10;
    visibility: hidden;

    &.open{
      visibility: visible;
      opacity: 1;
      z-index: 150;
    }

    &__inner{
      margin: 1.75rem auto;
      max-width: 486px;
      top: 150px;
    }

    &__content{
      min-height: calc(100% - (1.75rem * 2));
      position: relative;
      padding:  0 59px 50px;
      background: #FFFFFF;
      box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.16);
      border-radius: 6px;
    }

    &__close{
      position: absolute;
      right: 12px;
      top: 12px;
      width: 28px;
      height: 28px;
      border: 0;
      outline: none;
      background-color: transparent;
      /*background-image: url("../../assets/img/ico/menu/cross-red-ico.svg");*/
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      z-index: 10;
      cursor: pointer;
    }

    &__header{
      padding: 35px 50px 25px;
      font-weight: 500;
      font-size: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: #141414;
      line-height: 44px;

      &--left{
        text-align: left;
        justify-content: flex-start;
        padding: 20px 59px 15px;
        margin: 0 -59px;
        line-height: 46px;
        border-bottom: 1px solid #F0F0F0;

        @media (max-width: 992px) {
          margin: 0 -34px;
        }
      }
    }

    &__body{

      p{
        font-size: 16px;
        line-height: 24px;
        color: #525252;
        margin-top: 0;
        margin-bottom: 30px;
      }
    }

  }

  .successful-txt{
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #141414;
    margin-bottom: 50px;
  }

  .successful-img{
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 65px;
    max-width: 279px;
    width: 100%;
  }

  .successful-btn{
    width: 100%;
    max-width: 368px;
    justify-content: center;
  }

</style>
