import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth/auth'
import chats from './Chat/Chat'
import contact from './Contact/contact'
import User from './user/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    chats,
    contact,
    User
  }
})
