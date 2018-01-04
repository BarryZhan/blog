import Vue from 'vue'
import Router from 'vue-router'

import LoadingBar from '../components/loading-bar'
import routes from './routes'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }
})

router.beforeEach((to, from, next) => {
  LoadingBar.start()
  next()
})

router.afterEach(route => {
  LoadingBar.finish()
})

export default router
