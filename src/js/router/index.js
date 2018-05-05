import Vue from 'vue/dist/vue.js'
import Router from 'vue-router'
import Home from '../containers/Home/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
  ]
})
