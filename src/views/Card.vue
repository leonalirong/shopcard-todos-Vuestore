<template>
  <div>
    <h1>这里是购物车页面</h1>
    <ul>
      <li
        v-for="card in cards"
        :key="card.id"
      >
        {{card.name}}-{{card.nums}}-{{card.price}}
      </li>
    </ul>
    <p>总价是： {{ cardTotal }}</p>
  </div>
</template>
<script>
import { mapState,mapGetters } from 'vuex';
export default {
  computed:{
    ...mapState('card',['cards']),
    ...mapGetters('card',['cardTotal'])
  }
}
</script>