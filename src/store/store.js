import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  userData: [],
  mailUserData: [],
  login: 'ログインしました',
  logout: 'ログアウトしました',
  sinup: 'アカウントを作成しました',
  del: 'アカウントを削除しました',
};

const store = new Vuex.Store({
  state,
});

export default store;