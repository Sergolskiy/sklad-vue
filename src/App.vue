<template>
  <div id="app">

    <p>{{ $t("message.hello") }}</p>
    <router-link to="/home">Перейти к Foo</router-link>

    <AuthLayout v-if="Object.prototype.hasOwnProperty.call(this.$route.meta, 'layout') && this.$route.meta.layout.name === 'auth'" />

    <DefaultLayout v-if="!Object.prototype.hasOwnProperty.call(this.$route.meta, 'layout')" />


  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import AuthLayout from './components/layouts/AuthLayout/AuthLayout.vue'
import DefaultLayout from './components/layouts/DefaultLayout/DefaultLayout.vue'

export default {
  name: 'App',

  components: {
    AuthLayout,
    DefaultLayout,
  },

  data(){
    return{
      data: []
    }
  },

  mounted() {
    // console.log(this.$store.getters.getLang);
    // this.$store.commit('setLang', 'ru')
    // console.log(this.$store.getters.getLang);

    // console.log(this._i18n.locale = 'he');
    // alert(3423);

  //
  //   console.log(this.$route.meta.hasOwnProperty('layout'));
    console.log(Object.prototype.hasOwnProperty.call(this.$route.meta, 'layout'));


    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => {
    //     console.log(json)
    //     this.data.push(json)
    //   })
  }


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
