/*路由模块对象 */
import Vue from 'vue'
import Router from 'vue-router'
import MSite from '../pages/MSite/MSite'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'
//声明使用插件
Vue.use(Router)

export default new Router({
  //所有路由
  routes: [
    // 重定向：
    // / 是默认的路径，页面第一打开的时候，就会访问这个路径
    // 当这个路径匹配成功后，通过指定的 redirect 就可以重定向到其他路由了
    { path: '/', redirect: '/msite' },
    {
      path: "/login",
      component: Login,
      meta: {
        showFooter: false
      }
    },
    {
      path: "/msite",
      component: MSite,
      meta: {
        showFooter: true
      }
    },
    {
      path: "/search",
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: "/profile",
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: "/order",
      component: Order,
      meta: {
        showFooter: true
      }
    },

  ]
})
