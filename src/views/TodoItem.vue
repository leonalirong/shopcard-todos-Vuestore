<template>
  <li>{{todo.name}}--<button @click="delTodo(todo)">DelTodo</button></li>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  props:{
    todo:Object,
    index:Number
  },
  methods:{
    ...mapActions(['delTodo'])
  }
}
</script>