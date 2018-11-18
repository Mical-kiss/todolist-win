import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'Vuex'

import './assets/styles/global.styl'

import App from './app.vue'
import creatRouter from './config/router'
// import creatStore from './store/store'

Vue.use(VueRouter)
Vue.use(Vuex)

export default () => {
  const router = creatRouter()
  // const store = creatStore()

  const app = new Vue({
    router,
    // store,
    render: h => h(App)
  })
  return { app, router }
}
