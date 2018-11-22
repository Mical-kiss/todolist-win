import creatApp from './creat-app'

const { app, router } = creatApp()

router.onReady(() => {
  app.$mount('#root')
})
