import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogined: false,
    user: {}
  },
  mutations: {
    SET_LOGIN_STATE (state) {
      state.isLogined = state
    }
  },
  actions: {
    setLoginState ({commit}, loginState) {
      commit('SET_LOGIN_STATE', loginState)
    },
    setUser ({commit}, user) {
      commit('SET_USER', user)
    }
  },
  getters: {
    isLoginState (state) {
      return state.isLogined
    },
    user (state) {
      return state.user
    }
  }
})
