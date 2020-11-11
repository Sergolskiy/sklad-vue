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
    PATHS: {},
  },

  getters: {
    GET_LANG: state => {
      return state.lang;
    },
    GET_PATHS: state => {
      return state.PATHS;
    },
  },

  mutations: {
    SET_LANG: (state, payload) => {
      state.lang = payload;
    },
    SET_PATHS: (state, payload) => {
      state.PATHS = payload;
    },
  },

  actions: {},
});
