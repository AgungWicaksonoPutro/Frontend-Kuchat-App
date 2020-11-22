import axios from 'axios'
const state = {
  messages: []
}

const mutations = {
  setChats (state, payload) {
    state.messages = payload
  },
  addChat (state, payload) {
    const { idSender, chat, createAt } = payload
    const data = {
      idSender,
      chat,
      createAt
    }
    state.messages.push(data)
  },
  newChat (state, payload) {
    const { idReceiver, chat, createAt } = payload
    const data = {
      idReceiver,
      chat,
      createAt
    }
    state.messages.push(data)
  }
}

const actions = {
  getChatById (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(process.env.VUE_APP_API_URL + '/chats/' + payload)
        .then((res) => {
          context.commit('setChats', res.data.result)
          resolve(res.data.result)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  getMessage (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(process.env.VUE_APP_API_URL + `/chats/${payload || ''}`)
        .then((res) => {
          console.log(res.data)
          console.log(payload)
          context.commit('setChats', res.data.result)
          resolve(res.data.result)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

const getters = {
  getMsg (state) {
    return state.messages
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
