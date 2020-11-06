<template>
  <div>
    home
  </div>
</template>

<script>
  export default {
    name: "Home",

    data(){
      return{
        data: []
      }
    },

    mounted() {
      // console.log(this.$route);
      // console.log(this.$store.getters.getLang);
      // this.$store.commit('setLang', 'ru')
      // console.log(this.$store.getters.getLang);

      // console.log(this._i18n.locale = 'he');
      // alert(3423);
      // fetch('https://jsonplaceholder.typicode.com/todos/1')
      //   .then(response => response.json())
      //   .then(json => {
      //     console.log(json)
      //     this.data.push(json)
      //   })
    }
  }
</script>

<style scoped>

</style>
