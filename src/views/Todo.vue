<template>
  <div>
    <input type="text" v-model="inputVal">
    <button @click="fn1">ADD</button>
    <ul>
      <TodoItem 
      v-for="(item,index) in todos" 
      :key="index" 
      :todo="item" 
      :index="index"
      >
      </TodoItem>
    </ul>

    <ul>
      <h1>下面是商品列表</h1>
      <li
        v-for="item in goods"
        :key="item.id"
      >
      {{item.id}}-{{item.name}}
      <button>-</button>&nbsp;
      <button @click="addCard(item)">+</button>
      </li>
    </ul>
    <router-link to="/card">去购物车页面</router-link>
  </div>
</template>
<script>
import TodoItem from "./TodoItem";
import { mapState, mapMutations,mapActions } from "vuex";
export default {
  computed: {
    ...mapState('todo',['todos']),
    ...mapState('good',['goods']),

    inputVal: {
      get() {
        return this.$store.state.inputVal;
      },
      set(value) {
        //console.log(value)
        // this.$store.commit("chgInputVal", value);
        
        //this.$store.commit("todo/chgInputVal", value);
        this.chgInputVal(value);
      }
    }
  },
  methods: {
  //...mapMutations(["addCard"]),
  ...mapMutations('card',["addCard"]),
  ...mapMutations('todo',['chgInputVal']),
   //...mapActions(['fn1','initTodos','getGoods']),
  ...mapActions('todo',['fn1','initTodos']),
  ...mapActions('good',['getGoods']),
    // fn1(){
    //   this.$store.dispatch('fn1')//这个fn1是仓库里的fn1
    // }
    
  },
  created(){
    this.initTodos();
    this.getGoods();
  },
  components: {
    TodoItem
  }
};
</script>