export const user = {
  state: {
    id: false,
    type: 'customer',
    avatar: ''
  },

  mutations: {
    setUserType: (state, payload) => {
      state.type = payload.type
    },
  },

  getters: {
    getUserType: state => {
      return state.type
    }
  },

  actions: {
    changeUserType({commit}, type) {
      commit('setUserType',{type: type,})
    },
  }
}
