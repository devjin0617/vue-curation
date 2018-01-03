import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogined: false
  },
  mutations: {
    SET_LOGIN_STATE (state) {
      state.isLogined = state
    }
  },
  actions: {
    setLoginState ({commit}, loginState) {
      commit('SET_LOGIN_STATE', loginState)
    }
  },
  getters: {
    isLoginState (state) {
      return state.isLogined
    }
  }
})
