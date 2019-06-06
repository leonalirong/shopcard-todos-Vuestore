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
  </div>
</template>
<script>
import TodoItem from "./TodoItem";
import { mapState, mapMutations,mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["todos"]),
    inputVal: {
      get() {
        return this.$store.state.inputVal;
      },
      set(value) {
        //console.log(value)
        this.$store.commit("chgInputVal", value);
      }
    }
  },
  methods: {
   // ...mapMutations(["addTodo"]),
   ...mapActions(['fn1','initTodos']),

    // fn1(){
    //   this.$store.dispatch('fn1')//这个fn1是仓库里的fn1
    // }
    
  },
  created(){
    this.initTodos();
  },
  components: {
    TodoItem
  }
};
</script>