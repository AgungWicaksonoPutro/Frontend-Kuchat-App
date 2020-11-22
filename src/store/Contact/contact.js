import axios from 'axios'
const state = {
  contact: [],
  friendList: [],
  location: []
}

const mutations = {
  setfriendList (state, payload) {
    state.friendList = payload
  },
  setContact (state, payload) {
    state.contact = payload
  },
  setLocation (state, payload) {
    state.location = payload
  }
}

const actions = {
  getContactById (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(process.env.VUE_APP_API_URL + '/contacts/' + payload)
        .then((res) => {
          context.commit('setfriendList', res.data.result)
          resolve(res.data.result)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  getContactProfiles (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(process.env.VUE_APP_API_URL + '/users/' + payload)
        .then((res) => {
          context.commit('setContact', res.data.result[0])
          resolve(res.data.result[0])
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

const getters = {
  getFriendList (state) {
    return state.friendList
  },
  getProfileContact (state) {
    return state.contact
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
