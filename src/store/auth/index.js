
import {API} from '../../axios/axiosMainUrl'

export const auth = {
  state: {
    auth: false,
    token: false,
    loading: false,
  },

  mutations: {
    setAuthStart: (state) => {
      state.loading = true
    },
    setAuthEnd: (state) => {
      state.loading = false
    },
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
    auth({commit}, data) {
      // "Access-Control-Allow-Origin", "*"
      API.post('oauth/login', data)
      commit('setAuthEnd')
      // return async () => {
      //
      //   try {
      //     // const response = await API.post('oauth/login', authData );
      //     commit('setAuthStart')
      //     await API.post('oauth/login', data)
      //     // commit('setAuth',{auth: true, token: '123'})
      //     // localStorage.setItem('token', '123');
      //     commit('setAuthEnd')
      //     // return response;
      //   } catch (e) {
      //     console.log(e);
      //   }
      //
      // }

    },

    checkAuth() {
      if(localStorage.getItem('token') !== null){
        // commit('setAuth',{auth: true, token: '123'})
        return true;
      }

      return false;
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
