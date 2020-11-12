import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store';
import {i18n} from './language/language';
import {router} from './router/router';
// import axios from 'axios'

// Vue.use(axios)

Vue.config.productionTip = false

// Vue.config.errorHandler = function (err, vm, info) {
//   console.log(999);
//   console.log(err)
//   console.log(vm);
//   console.log(info);
//   console.log(354);
//   // Обработка ошибки. В `info` подробности Vue-специфичной ошибки,
//   // например, в каком хуке жизненного цикла произошла ошибка.
//   // Доступно только в версиях 2.2.0+
// }

// Vue.config.warnHandler = function (msg, vm, trace) {
//   // `trace` — это трассировка иерархии компонентов
//   console.log(111);
//   console.log(msg)
//   console.log(vm);
//   console.log(vm._data.data);
//   console.log(vm.$store);
//   console.log(vm._routerRoot._route.fullPath);
//   console.log(vm._routerRoot._route);
//   console.log(vm.$vnode.tag);
//   console.log(navigator.userAgent);
//   console.log(window.innerHeight);
//   console.log(window.innerWidth);
//   console.log(trace);
//   // screenshot
//   console.log(222);
// }

new Vue({
  render: h => h(App),
  store,
  i18n,
  router
}).$mount('#app')
