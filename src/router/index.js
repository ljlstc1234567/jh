import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

const index  = () => import('@/pages/index')
const goodsDetail = () => import('@/pages/goodsDetail')

export default new Router({
  //mode:"history",
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: { title: '衣佳人女装店'}
    },
    {
      path: '/goodsDetail/:id',
      name: 'goodsDetail',
      component: goodsDetail,
      meta: { title: '商品详情'}
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
