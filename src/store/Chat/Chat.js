import axios from 'axios'
const state = {
  messages: [],
  contactChat: [],
  friendContact: [],
  idContact: 0
}

const mutations = {
  setFriendContact (state, payload) {
    const data = state.contactChat.filter(a => {
      return a.idContact === payload
    })
    state.friendContact = data
  },
  setChats (state, payload) {
    state.messages = payload
  },
  addChat (state, payload) {
    const { idSender, chat, createAt, imageUser } = payload
    const data = {
      idSender,
      chat,
      createAt,
      imageUser
    }
    state.messages.push(data)
  },
  newChat (state, payload) {
    const { idReceiver, chat, createAt, imageUser } = payload
    const data = {
      idReceiver,
      chat,
      createAt,
      imageUser
    }
    console.log(payload + 'data')
    state.messages.push(data)
  },
  setNewChat (state, payload) {
    const ready = state.contactChat.find(a => {
      return a.idFriend === payload.idFriend
    })
    if (!ready) {
      state.contactChat.push(payload)
    }
  },
  setIdContactOnChat (state, payload) {
    state.idContact = payload
  }
}

const actions = {
  getChatById (context, payload) {
    return new Promise((resolve, reject) => {
      axios.get(process.env.VUE_APP_API_URL + '/chats/' + payload)
        .then((res) => {
          if (res.data.result[0] !== undefined) {
            context.commit('setNewChat', res.data.result[0])
          }
          resolve(res.data.result[0])
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
  },
  getContactChat (state) {
    const TabulasiContact = state.contactChat.map(a => {
      const convert = {}
      convert.chat = a.chat
      convert.createAt = a.createAt
      convert.id = a.id
      convert.idChats = a.idChats
      convert.idContact = a.idContact
      convert.idFriend = a.idUser
      convert.idSender = a.idSender
      convert.idUser = a.idFriend
      convert.imageChat = a.imageChat
      convert.imageUser = a.imageUser
      convert.name = a.name
      convert.status = a.status
      if (Number(a.idFriend) === Number(state.idContact)) {
        return convert
      }
      return a
    })
    return TabulasiContact
  },
  friendContact (state) {
    return state.friendContact
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
