import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import league from '@/pages/league'
import special from '@/pages/special'
import module from '@/pages/module'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/league',
      name: 'league',
      component: league
    },
    {
      path: '/special',
      name: 'special',
      component: special
    }
  ]
})
