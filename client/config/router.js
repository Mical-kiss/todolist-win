import Router from 'vue-router'
import routes from './routes'

export default () => {
  return new Router({
    routes,
    mode: 'history',
    // base: '/base/',
    // linkActiveClass: '',
    // linkExactActiveClass: '',
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return {x: 0, y: 0}
      }
    }
    // fallback: true // 不支持自动使用哈希模式
    // parseQuery (str) {},
    // stringifyQuery (obj) {}
  })
}
