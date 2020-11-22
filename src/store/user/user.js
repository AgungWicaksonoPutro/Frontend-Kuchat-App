import axios from 'axios'
const state = {
  profile: {}
}

const mutations = {
  setProfile (state, payload) {
    state.profile = payload
  }
}

const actions = {
  getUserById (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(process.env.VUE_APP_API_URL + '/users/' + payload)
        .then((res) => {
          context.commit('setProfile', res.data.result[0])
          resolve(res.data.result[0])
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  editUser (context, payload) {
    return new Promise((resolve, reject) => {
      axios.patch(process.env.VUE_APP_API_URL + '/users/' + payload.id, payload.data)
        .then((res) => {
          resolve(res.data.result)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

const getters = {
  getProfile (state) {
    return state.profile
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
