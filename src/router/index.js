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
import Dashboard from '@/components/Dashboard'
import SalesProfit from '@/components/SalesProfit'
import LossBottleWater from '@/components/LossBottleWater'
import TopCustomer from '@/components/TopCustomer'
import User from '@/components/User'
import Role from '@/components/Role'
import Branches from '@/components/Branches'

Vue.use(Router)
Vue.mixin({
  methods: {
    bustaUrl: function (url) {
      return 'http://api.bustabit.local:4002/api/' + url
    },
    getDocItems: function (items) {
      if (items.length === 0) window.location.href = '/main-page'
    },
    formatNumber (value) {
      return this.formatPrice(value, false)
    },
    formatPrice (value, bool = true) {
      const val = (value / 1).toFixed(2).replace('.', ',')
      const number = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      if (bool) return 'P ' + number
      return number
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
      path: '/',
      name: 'Dashboard',
      component: MainPage,
      children: [
        {
          path: 'dashboard',
          component: Dashboard
        }]
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
    },
    {
      path: '/inquiry',
      name: 'MainPage',
      component: MainPage,
      children: [
        {
          path: 'sales-profit',
          component: SalesProfit
        },
        {
          path: 'loss-bottle-water',
          component: LossBottleWater
        },
        {
          path: 'top-customer',
          component: TopCustomer
        }
      ]
    },
    {
      path: '/system-setup',
      name: 'MainPage',
      component: MainPage,
      children: [
        {
          path: 'user',
          component: User
        },
        {
          path: 'role',
          component: Role
        },
        {
          path: 'branches',
          component: Branches
        }
      ]
    }
  ]
})
