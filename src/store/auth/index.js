export const auth = {
  state: {
    auth: false,
    token: false,
  },

  mutations: {
    setAuth: (state, payload) => {
      state.auth = payload.auth
      state.token = payload.token
    },
  },

  getters: {
    getAuth: state => {
      return state.auth
    }
  },

  actions: {
    auth({commit}) {
      commit('setAuth',{auth: true, token: '123'})

      localStorage.setItem('token', '123');
    },

    checkAuth({commit}) {
      if(localStorage.getItem('token') !== null){
        commit('setAuth',{auth: true, token: '123'})
      }
    },

    logOut({commit}) {
      commit('setAuth',{auth: false, token: false})
    },

    registration({commit}) {
      commit('setAuth',{auth: true, token: '123'})

      localStorage.setItem('token', '123');
    }
  }
}
