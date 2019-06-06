const state = {
  cards: []

}
const getters = {
  cardTotal (state) {
    let total = 0
    state.cards.forEach(item => {
      total += item.nums * item.price
    })
    return total
  }

}
const mutations = {
  addCard (state, good) {
    let id = good.id
    let index = state.cards.findIndex(good => good.id === id)
    if (index >= 0) {
      state.cards[index].nums += 1
    } else {
      state.cards.push({ ...good, nums: 1 })
    }
  }

}
const actions = {

}

export default {
  // 一个仓库子模块，我们都给他再加上一个属性namespaced
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
