import Vue from 'vue/dist/vue.js'
import router from './router'
import store from './store'
import App from './App'
// import router from './router'
// import store from './store'

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App: App }
});

module.hot && module.hot.accept();
