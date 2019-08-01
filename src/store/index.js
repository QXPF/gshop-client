/*
vuex最核心的管理对象store
*/
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
Vue.use(Vuex)
export default new Vuex.Store({
  state,//状态管理对象
  mutations,//处理数据的唯一途经,state的改变和赋值只能在这里
  actions, //数据的异步操作
  getters,//获取数据并渲染
})