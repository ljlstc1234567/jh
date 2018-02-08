import Vue from 'vue'
import Router from 'vue-router'
const index  = () => import('@/pages/index')
const league = () => import('@/pages/league')
const special = () => import('@/pages/special')
const module = () => import('@/pages/module')
const cart = () => import('@/pages/cart')
const mine = () => import('@/pages/mine')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: { title: '首页'}
    },
    {
      path: '/league',
      name: 'league',
      component: league,
      meta: { title: '加盟'}
    },
    {
      path: '/special',
      name: 'special',
      component: special,
      meta: { title: '专题'}
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart,
      meta: { title: '购物车'}
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine,
      meta: { title: '个人中心'}
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
