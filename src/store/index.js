import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  inputVal: '',
  todos: [],
  goods: [], // 商品数据
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
  chgInputVal (state, payload) {
    state.inputVal = payload
  },
  initTodo (state, todos) {
    state.todos = todos
  },
  addTodo (state) {
    let todo = {
      name: state.inputVal
    }
    state.todos.push(todo)
  },

  delTodo (state, payload) {
    // let index = payload.index
    // state.todos.splice(index, 1)
    let index = state.todos.findIndex(item => item.id === payload)
    state.todos.splice(index, 1)
  },
  setGoods (state, goods) {
    state.goods = goods
  },
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
  // context 可以理解为this.$store,可以给他做解构换成{ state}
  fn1 ({ state, commit }) {
    fetch('http://localhost:3000/todos', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ name: state.inputVal })
    })
      .then(response => response.json)
      .then(res => {
        // console.log(res);
        // this.addTodo()
        commit({
          type: 'addTodo'
        })
      })
  },
  // 初始化todos数据
  initTodos ({ commit }) {
    fetch('http://localhost:3000/todos')
      .then(response => response.json())
      .then(res => {
        console.log(res)
        commit('initTodo', res)
      })
  },

  delTodo ({ commit, state }, todo) {
    // 将 现在仓库中的数据给存储起来
    let newTodos = [...state.todos]// 原本不加三点和中括号的话，二者指向同一内存地址，是引用类型，修改其中一项对另一项会有影响，加上之后就变成了一个新数组

    commit('delTodo', todo.id)

    setTimeout(() => {
      // console.log(2222)
      fetch(`http://localhost:3000/todos/${todo.id}`, {
        method: 'delete'
      }).then(response => response.json())
        .then(res => {
          console.log(res)
        })
        .catch(error => {
          // 删除失败
          console.log(error.message)
          commit('initTodo', newTodos)
        })
    }, 2000)
  },

  getGoods ({ commit }) {
    fetch('http://localhost:3000/goods')
      .then(response => response.json())
      .then(res => {
        console.log(res)
        commit('setGoods', res)
      })
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
