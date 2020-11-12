<template>
  <button class="main-button">
    {{value}}
  </button>
</template>

<script>
  export default {
    name: "MainButton",

    data () {
      return {
        id: null,
        isShowPass: false,
      }
    },

    props: [
      'value',
    ],

    mounted () {

    },

    methods: {

    }
  }
</script>

<style lang="scss">
  @import "../../../../scss/mixins/mixins";

  .main-button{
    display: flex;
    height: 43px;
    max-width: 149px;
    width: 100%;
    align-items: center;
    justify-content: center;
    background: #CD9E64;
    border-radius: 5px;
    border: 0;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    cursor: pointer;
    outline: 0;
    transition: 0.3s;
    padding: 0 15px;

    &:hover{
      box-shadow: 0px 0 8px #00000052;
    }
  }
</style>
