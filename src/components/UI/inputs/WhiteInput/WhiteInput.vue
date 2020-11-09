<template>
  <div class="white-input-wrap">
    <input :type="type" class="white-input">
  </div>
</template>

<script>
  export default {
    name: "WhiteInput",

    props: [
      'type'
    ],
  }
</script>

<style lang="scss">
  @import "../../../../scss/mixins/mixins";

  /*@include from-550{
    .white-input-wrap{
      display: block;
    }
  }*/
</style>
