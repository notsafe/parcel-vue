import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex'

import message from './modules/helloworld'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    message
  }
})

export default store
