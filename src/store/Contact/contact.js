import axios from 'axios'
const state = {
  allContact: [],
  contact: [],
  location: [],
  idProfile: 0,
  profileContact: []
}

const mutations = {
  setContact (state, payload) {
    state.contact = payload
  },
  setLocation (state, payload) {
    state.location = payload
  },
  setAllContact (state, payload) {
    const tabContact = payload.filter(a => {
      return Number(a.idUser) === Number(state.idProfile) || Number(a.idFriend) === Number(state.idProfile)
    }).map(a => {
      const setFriend = {}
      setFriend.id = a.id
      setFriend.idUser = a.idFriend
      setFriend.idFriend = a.idUser
      if (Number(state.idProfile) === Number(a.idFriend)) {
        return setFriend
      } else {
        return a
      }
    })
    console.log(tabContact)
    state.allContact = tabContact
  },
  setIdContact (state, payload) {
    state.idProfile = payload
  }
}

const actions = {
  getContactById (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(process.env.VUE_APP_API_URL + '/contacts/' + payload)
        .then((res) => {
          context.commit('setContact', res.data.result[0])
          resolve(res.data.result[0])
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
  },
  getAllContact (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(process.env.VUE_APP_API_URL + '/contacts/')
        .then((res) => {
          context.commit('setAllContact', res.data.result)
          resolve(res.data.result)
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
  },
  getAllContactList (state) {
    return state.allContact
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
