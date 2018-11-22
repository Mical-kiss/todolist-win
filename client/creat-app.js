import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Meta from 'vue-meta'

import App from './app.vue'
import creatRouter from './config/router'
import creatStore from './store/store'
import './assets/styles/global.styl'
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Meta)

export default () => {
  const router = creatRouter()
  const store = creatStore()

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  return { app, router }
}
