const state = {
  goods: [] // 商品数据
}
const getters = {

}
const mutations = {
  setGoods (state, goods) {
    state.goods = goods
  }
}
const actions = {
  // context 可以理解为this.$store,可以给他做解构换成{ state}

  getGoods ({ commit }) {
    fetch('http://localhost:3000/goods')
      .then(response => response.json())
      .then(res => {
        console.log(res)
        commit('setGoods', res)
      })
  }
}

export default {
  // 一个仓库子模块，我们都给他再加上一个属性namespaced
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
