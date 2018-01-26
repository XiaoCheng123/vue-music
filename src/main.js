// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import VueLazyload from 'vue-lazyload'
import 'common/stylus/index.styl'

Vue.prototype.$axios = axios
Vue.use(VueLazyload, {
  error: 'src/common/image/default.png',
  loading: 'src/common/image/default.png'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
