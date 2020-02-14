import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ticket: 10
  },
  mutations: {
    SET_TICKET (state,data) {
      state.ticket = data
    }
  },
  actions: {
    getTicketFromStore ({commit}, payload){
      commit('SET_TICKET',payload)
    }
  },
  getters: {
    ticket: (state) => state.ticket
  },
  modules: {
  }
})
