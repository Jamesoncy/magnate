import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import MainPage from '@/components/MainPage'
import RawMats from '@/components/RawMats'
import Products from '@/components/Products'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/main-page',
      name: 'MainPage',
      component: MainPage,
      children: [
        {
          path: 'raw-materials',
          component: RawMats
        },
        {
          path: 'products',
          component: Products
        }
      ]
    }
  ]
})
