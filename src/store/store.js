import Vue from 'vue';
import Vuex from 'vuex';
import {auth} from './auth'
import {user} from './user'

Vue.use(Vuex);

export const store = new Vuex.Store({

  modules: {
    auth: auth,
    user: user,
  },

  state: {
    lang: 'en',
  },

  getters: {
    GET_LANG: state => {
      return state.lang;
    },
  },

  mutations: {
    SET_LANG: (state, payload) => {
      state.lang = payload;
    },
  },

  actions: {},
});
