<template>
  <div id="app">
    <div>message:{{message}}</div>
    <div>doneMessage:{{doneCount}}</div>
    <div>msg:{{msg}}</div>
    <div class="btn" @click="onChange1">按钮1</div>
    <div class="btn" @click="onChange2">按钮2</div>

  </div>
</template>

<script>
import Vue from 'vue'
import Vuex, { mapState,mapGetters } from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    count: 0
  },
  getters:{
    doneCount: state=>{
      return state.count++
    }
  },
  mutations:{
    increment(state){
      state.count++
    }
  }
})
export default {
  name: 'app',
  store,
  data(){
    return {
      // 放在这里虽然状态改变了，但是不会重新赋值给msg，需在计算属性中响应
      msg: this.$store.state.msg,
    }
  },
  computed:{
    ...mapState({
    message: 'count'
  }),
  ...mapGetters({
    doneCount: 'doneCount'
  })
  }
  ,
  methods:{
    onChange1(){
      store.commit('increment')
    },
    onChange2(){
      this.$store.commit('add')
    },
  }
}
</script>

<style>
  .btn{
    background: blue;
    padding: 10px;
    width: 50px;
    height: 20px;
    margin-bottom: 20px;
  }
</style>
