import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import MainPage from '@/components/MainPage'
import RawMats from '@/components/RawMats'
import Products from '@/components/Products'
import Vendor from '@/components/Vendor'
import PurchaseRawMats from '@/components/PurchaseRawMats'
import BottledWater from '@/components/BottledWater'
import CreateWater from '@/components/CreateWater'
import TransferBottledWater from '@/components/TransferBottledWater'
import Uom from '@/components/Uom'

Vue.use(Router)
Vue.mixin({
  methods: {
    bustaUrl: function (url) {
      return 'http://api.bustabit.local:4002/api/' + url
    },
    getDocItems: function (items) {
      if (items.length === 0) window.location.href = '/main-page'
    },
    formatPrice (value) {
      let val = (value / 1).toFixed(2).replace('.', ',')
      return 'P ' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    }
  }
})
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/products-setup',
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
        },
        {
          path: 'vendor',
          component: Vendor
        },
        {
          path: 'purchase-raw-materials',
          component: PurchaseRawMats
        }
      ]
    },
    {
      path: '/transaction',
      name: 'MainPage',
      component: MainPage,
      children: [
        {
          path: 'bottled-water',
          component: BottledWater
        },
        {
          path: 'create-bottled-water',
          component: CreateWater
        },
        {
          path: 'transfer-bottled-water',
          component: TransferBottledWater
        },
        {
          path: 'transfer-bottled-water',
          component: TransferBottledWater
        },
        {
          path: 'uom',
          component: Uom
        }
      ]
    }
  ]
})
