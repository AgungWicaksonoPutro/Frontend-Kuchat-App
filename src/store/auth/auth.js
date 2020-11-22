import axios from 'axios'
import router from '../../router/index'

const state = {
  token: localStorage.getItem('token') || null,
  userId: localStorage.getItem('userId') || null,
  user: {}
}

const mutations = {
  setUser (state, payload) {
    state.user = payload
    state.token = payload.token
    state.userId = payload.idUser
  },
  setToken (state, payload) {
    state.token = payload
  },
  deleteToken (state) {
    state.token = null
  }
}

const actions = {
  login (context, payload) {
    return new Promise((resolve, reject) => {
      axios.post(process.env.VUE_APP_API_URL + '/users/login', payload)
        .then((res) => {
          context.commit('setUser', res.data.result)
          localStorage.setItem('token', res.data.result.token)
          localStorage.setItem('userId', res.data.result.idUser)
          context.dispatch('interceptorRequest')
          resolve(res.data.result[0])
        })
        .catch((err) => {
          console.log(err)
          reject(err)
        })
    })
  },
  interceptorRequest (context) {
    axios.interceptors.request.use(function (config) {
      config.headers.Authorization = `Bearer ${context.state.token}`
      return config
    }, function (error) {
      return Promise.reject(error)
    })
  },
  interceptorsResponse (context) {
    axios.interceptors.response.use(function (response) {
      return response
    }, function (error) {
      if (error.response.status === 403) {
        if (error.response.data.result.message === 'Token Expired !') {
          context.commit('setToken', null)
          localStorage.removeItem('token')
          router.push('Login')
        } else if (error.response.data.result.message === 'Token invalid !') {
          context.commit('setToken', null)
          localStorage.removeItem('token')
          router.push('Login')
        }
      }
      if (error.response.status === 401) {
        if (error.response.data.result.message === 'Password Wrong!') {
          alert(error.response.data.result.message)
          context.commit('setToken', null)
          localStorage.removeItem('token')
        } else if (error.response.data.result.message === 'Email Not Found!') {
          alert(error.response.data.result.message)
          context.commit('setToken', null)
          localStorage.removeItem('token')
        }
      }
      return Promise.reject(error)
    })
  },
  register (context, payload) {
    return new Promise((resolve, reject) => {
      axios.post(process.env.VUE_APP_API_URL + '/users/register', payload)
        .then((res) => {
          resolve(res.data.result)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  logOut (context) {
    context.commit('deleteToken')
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    router.push('/auth/login')
  }
}

const getters = {
  allUsers (state) {
    return state.user
  },
  isLogin (state) {
    return state.token !== null && state.userId !== null
  },
  userId (state) {
    return state.userId
  },
  getFriends (state) {
    return state.friendList
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
