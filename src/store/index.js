import Vue from 'vue'
import Vuex from 'vuex'
import todo from './todo/index'
import good from './good/index'
import card from './card/index'

Vue.use(Vuex)

export default new Vuex.Store({
  // 引入模块
  modules: {
    todo,
    good,
    card
  }
})
