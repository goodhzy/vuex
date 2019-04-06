import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: 0
  },
  mutations: {
    add(state){
      state.msg++
    }
  },
  actions: {

  }
})
