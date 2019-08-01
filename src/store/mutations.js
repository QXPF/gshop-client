/*直接更新state的多个方法的对象
提交 mutations是更改Vuex状态的唯一合法方法
*/

export {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-types'
console.log(RECEIVE_ADDRESS)
export default {
  [RECEIVE_ADDRESS] (state, { address }) {
    state.address = address
  },
  [RECEIVE_ADDRESS] (state, { address }) {
    state.address = address
  },
  [RECEIVE_ADDRESS] (state, { address }) {
    state.address = address
  }
}