import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  count: 1
}

const getters = {
  count: state => state.count
}

const actions = {
  increment: ({ commit }) => {
    commit('increment')
  }
}

const mutations = {
  increment (state) {
    state.count++
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
