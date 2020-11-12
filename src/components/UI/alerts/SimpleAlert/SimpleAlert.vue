<template>
  <div :class="'alert' + alertClass() + (isOpen ? ' open' : '')">
    <div class="alert__txt">
      Your Email is Verified!
    </div>
    <span class="alert__close" v-on:click="closeAlert"></span>
  </div>

</template>

<script>
  export default {
    name: "SimpleAlert",

    data() {
      return {
        isOpen: false,
      }
    },

    props: [
      'color',
      'type',
    ],

    mounted() {
      setTimeout(() => {
        this.isOpen = true;
      }, 300);
    },

    methods: {
      alertClass() {
        let className = '';

        this.color ? className = className + ' alert--' + this.color : null;
        this.type ? className = className + ' alert--' + this.type : null;

        return className;
      },

      closeAlert() {
        this.isOpen = false;
        setTimeout(() => {
          this.$emit('close');
        }, 300);
      },
    },

  }
</script>

<style lang="scss">
  @import "../../../../scss/mixins/mixins";
  @import "../../../../scss/colors";

  .alert{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 25px;
    visibility: hidden;
    opacity: 0;
    transform: translateY(-5px);
    transition: 0.3s;

    &.open{
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    }

    &--green{
      color: $green;
      background: $greenBg;
    }

    &--success{
      padding-left: 30px;
      display: flex;

      & .alert__txt{
        padding-top: 5px;
      }

      &:before{
        content: "";
        display: block;
        width: 29px;
        height: 29px;
        background: url("../../../../assets/img/common/check-green.svg") center center no-repeat;
        margin-right: 8px;
      }

    }

    &__txt{
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
    }

    &__close{
      display: block;
      width: 12px;
      height: 12px;
      background: url("../../../../assets/img/common/close-green.svg") center center no-repeat;
      position: absolute;
      top: 15px;
      right: 15px;
      cursor: pointer;
    }
  }

</style>
