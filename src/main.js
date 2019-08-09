// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*
入口JS
*/

import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/index'
Vue.config.productionTip = false
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  // 声明模版
  // template: '<App/>',
  // 注册成组件
  // components: { App }
})
