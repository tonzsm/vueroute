import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ticket: 10,
    iticket: 10,
    buynum: 0,
  },
  mutations: {
    SET_TICKET (state,data) {
      state.iticket = data
    },
    SET_BUYNUM (state,data){
      state.buynum = data
    }
  },
  actions: {
    getTicketFromStore ({commit}, payload){
      commit('SET_TICKET',payload)
    },
    getBuyNum({commit}, payload){
      commit('SET_BUYNUM',payload)
    }
  },
  getters: {
    iticket: (state) => state.iticket,
    buynum: (state) => state.buynum
  }
})
