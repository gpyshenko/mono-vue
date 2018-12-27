import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import routes from './router/index'
import store from './store/store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass: 'current'
})

router.afterEach((to, from) => {
  console.log('Переход закончен')
  console.log(router.currentRoute.path)
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
