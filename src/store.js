import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { 
      isSignIn : false,
      userinfo : null 
    }
  },
  mutations: {
    signInUser (state, payload) {
      state.user.userinfo = payload
      state.user.isSignIn = true
    }
  },
  actions: {

  },
  plugins: [
    createPersistedState({
      getState: (key) => Cookies.getJSON(key),
      setState: (key, state) => Cookies.set(key, state, { expires: 3, secure: true })
    })
  ]
})
