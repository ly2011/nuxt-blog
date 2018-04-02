// topic.js
import { Login, getMessages, getUserInfo } from '~/api/cnode';
import { formatDate } from '~/utils/time';

export const state = () => ({
  loginInfo: {},
  userInfo: {},
  messages: {
    has_read_messages: [],
    hasnot_read_messages: []
  },
  accesstoken: '',
  loading: false
});
export const actions = {
  doLogin({ commit }, params = {}) {
    commit('setLoading', { loading: true });
    return new Promise((resolve, reject) =>
      Login(params)
        .then(login_info => {
          let loginInfo = {};
          if (login_info.success) {
            loginInfo.loginname = login_info.loginname;
            loginInfo.id = login_info.id;
            loginInfo.avatar_url = login_info.avatar_url;
          }
          commit('setLoginInfo', { loginInfo: loginInfo });
          commit('setLoading', { loading: false });
          commit('setAccessToken', params.accesstoken || '');
          resolve(login_info);
        })
        .catch(error => {
          commit('setLoading', { loading: false });
          reject(error);
        })
    );
  },
  getMessages({ commit }, params = {}) {
    commit('setLoading', { loading: true });
    return new Promise((resolve, reject) =>
      getMessages(params)
        .then(messages => {
          console.log('111');
          commit('setMessages', messages.data);
          commit('setLoading', { loading: false });
          resolve(messages);
        })
        .catch(error => {
          commit('setLoading', { loading: false });
          reject(error);
        })
    );
  },
  getUserInfo({ commit }, loginname = '') {
    return new Promise((resolve, reject) =>
      getUserInfo(loginname)
        .then(user_info => {
          commit('setUserInfo', { userInfo: user_info.data });
          resolve(messages);
        })
        .catch(error => {
          reject(error);
        })
    );
  },
  // 前端 登出
  fedLogOut({ commit }) {
    return new Promise(resolve => {
      clearUserInfo(commit);
      resolve();
    });
  }
};
export const mutations = {
  setLoginInfo(state, { loginInfo }) {
    state.loginInfo = loginInfo;
  },
  setLoading(state, { loading }) {
    state.loading = loading;
  },
  setAccessToken: (state, accesstoken) => {
    state.accesstoken = accesstoken;
    if (!global) {
      sessionStorage.setItem('accesstoken', accesstoken);
    }
  },
  setMessages: (state, messages) => {
    state.messages = messages;
  },
  setUserInfo(state, { userInfo }) {
    state.userInfo = userInfo;
  }
};

export const getters = {
  loginInfo(state) {
    return state.loginInfo;
  },
  loading(state) {
    return state.loading;
  },
  messages(state) {
    return state.messages;
  },
  userInfo(state) {
    return state.userInfo;
  },
  accesstoken(state) {
    if (!global) {
      return state.accesstoken || sessionStorage.getItem('accesstoken');
    }
    return state.accesstoken;
  }
};

// 清空用户信息
function clearUserInfo(commit) {
  commit('setAccessToken', '');
}
