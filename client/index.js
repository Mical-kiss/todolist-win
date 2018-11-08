import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import './assets/styles/global.stylus'

import App from './app.vue'
import creatRouter from './config/router'
import creatStore from './store/store'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = creatRouter()
const store = creatStore()
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
