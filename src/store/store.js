import Vuex from 'vuex'
import Vue from 'vue'
import {API} from "../services/api";
Vue.use(Vuex)
export const store = new Vuex.Store({

  state: {
    list: [],
    userInfo:[],
    auth:false
  },
  getters:{
    getAuth: function(state){
      return state
    },
    getUserList: function (state) {
      return state.list;
    },
    getUserInfo: function (state) {
      return state.userInfo;
    },
  },
  mutations: {
    setAuth: function (state) {
      state.auth = !state.auth;
    },
    setUserList: function (state, payload) {
      state.list = payload;
    },
    setUserInfo: function (state, payload) {
      state.userInfo = payload;
    },
  },
  actions: {
    async getUserList  ({commit}) {
    let list = await API.list()
      commit('setUserList', list.data)
    },
    async getUserInfo ({commit}, payload){
      let info = await API.info(payload)
      commit('setUserInfo', info.data)
    }
  }
})
