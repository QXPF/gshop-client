/*直接更新state的多个方法的对象
提交 mutations是更改Vuex状态的唯一合法方法
*/
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-types'
export default {
  [RECEIVE_ADDRESS] (state, { address }) {
    console.log(state)
    state.address = address
  },
  [RECEIVE_CATEGORYS] (state, { categorys }) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS] (state, { shops }) {
    state.shops = shops
  },
  aaa (state) {
    console.log(state)
  }
}