// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import jquery from 'jquery'
import VModal from 'vue-js-modal'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-select'
import 'bootstrap-select/dist/css/bootstrap-select.min.css'
/* eslint-disable */
window.$ = jquery
window.jQuery = jquery
require('font-awesome/css/font-awesome.min.css')
require('datatables')
require('sticky-kit/dist/sticky-kit.js')
require('jquery-slimscroll')
require('sidebarmenu')
require('../static/js/custom.min.js')
require('bootstrap/dist/css/bootstrap.min.css')
require('../static/css/style.css')
require('../static/css/helper.css')
require('metismenu')
require('../static/js/lib/datatables/datatables.min.js')
require('daterangepicker')
require('daterangepicker/daterangepicker.css')
Vue.config.productionTip = false
Vue.use(VModal, { dynamic: true })
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
