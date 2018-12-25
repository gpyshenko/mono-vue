import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(VueRouter)
Vue.use(Vuex)

new Vue({
  el: '#app',
  render: h => h(App)
})
