// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import jquery from 'jquery'
/* eslint-disable */
window.$ = jquery
window.jQuery = jquery
require('font-awesome/css/font-awesome.min.css')
require('datatables')
require('bootstrap')
require('bootstrap/dist/css/bootstrap.min.css')
require('sticky-kit/dist/sticky-kit.js')
require('jquery-slimscroll')
require('sidebarmenu')
require('../static/js/custom.min.js')
require('bootstrap/dist/css/bootstrap.min.css')
require('../static/css/style.css')
require('../static/css/helper.css')
require('metismenu')
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
