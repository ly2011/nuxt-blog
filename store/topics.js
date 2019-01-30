// store.js
/* import Vue from 'vue';
import Vuex from 'vuex';
import { getTopics, getTopic } from '~/api/cnode';

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    state: {
      topics: [],
      topic: {},
      tab: '',
      loading: false,
      pageInfo: {
        page: 1,
        limit: 12,
        total: 1000
      }
    },
    actions: {
      getTopics({ commit, state }, params = {}) {
        // `store.dispatch()` 会返回 Promise,
        // 以便我们能够知道数据在合适更新
        const { tab = '', page = 1, limit } = params;
        let clear = true;
        commit('setLoading', { loading: true });
        const pageInfo = { ...state.pageInfo, ...{ page, limit } };
        const searchParams = { ...pageInfo, ...{ tab } };

        commit('setTab', { tab });
        commit('setPageInfo', pageInfo);
        return getTopics(searchParams)
          .then(topics => {
            commit('setTopics', { topics: topics.data, clear });
            commit('setLoading', { loading: false });
          })
          .catch(() => {
            if (state.tab === tab) {
              // 拉取更多失败
              commit('setPageInfo', { page: state.pageInfo.page });
            }
            commit('setLoading', { loading: false });
          });
      },
      getTopic({ commit }, id) {
        commit('setLoading', { loading: true });
        return getTopic(id)
          .then(topic => {
            commit('setTopic', { id, topic });
            commit('setLoading', { loading: false });
          })
          .catch(() => {
            commit('setLoading', { loading: false });
          });
      },
      setTab({ commit }, tab = '') {
        commit('setTab', { tab });
      }
    },
    mutations: {
      setTopics(state, { topics, clear }) {
        if (clear) {
          state.topics = topics;
        } else {
          state.topics.push(...topics);
        }
      },
      setTopic(state, { id, topic }) {
        state.topic = topic;
      },
      setLoading(state, { loading }) {
        state.loading = loading;
      },
      setTab(state, { tab }) {
        state.tab = tab;
      },
      setPageInfo(state, params = {}) {
        state.pageInfo = { ...state.pageInfo, ...params };
      }
    }
  });
export default store;
 */
import { format } from 'date-fns'
import { getTopics } from '~/api/cnode'

export const state = () => ({
  topics: [],
  tab: '',
  loading: false,
  pageInfo: {
    page: 1,
    limit: 15,
    total: 1000
  }
})

export const actions = {
  getTopics({ commit, state }, params = {}) {
    // `store.dispatch()` 会返回 Promise,
    // 以便我们能够知道数据在合适更新
    const { tab = '', page = 1, limit = state.pageInfo.limit } = params
    const clear = true
    commit('setLoading', { loading: true })
    const pageInfo = { ...state.pageInfo, ...{ page, limit } }
    const searchParams = { ...pageInfo, ...{ tab } }

    commit('setTab', { tab })
    commit('setPageInfo', pageInfo)

    return getTopics(searchParams)
      .then((topics) => {
        commit('setTopics', { topics: topics.data, clear })
        commit('setLoading', { loading: false })
      })
      .catch(() => {
        if (state.tab === tab) {
          // 拉取更多失败
          commit('setPageInfo', { page: state.pageInfo.page })
        }
        commit('setLoading', { loading: false })
      })
  },

  setTab({ commit }, tab = '') {
    commit('setTab', { tab })
  }
}

export const mutations = {
  setTopics(state, { topics, clear }) {
    if (clear) {
      state.topics = topics
    } else {
      state.topics.push(...topics)
    }
  },

  setLoading(state, { loading }) {
    state.loading = loading
  },
  setTab(state, { tab }) {
    state.tab = tab
  },
  setPageInfo(state, params = {}) {
    state.pageInfo = { ...state.pageInfo, ...params }
  }
}

export const getters = {
  topics(state) {
    return state.topics.map((topic) => {
      if (topic.create_at) {
        topic.create_at = format(topic.create_at, 'YYYY-MM-DD')
      }
      return topic
    })
  },
  tab(state) {
    return state.tab
  },
  loading(state) {
    return state.loading
  },
  pageInfo(state) {
    return state.pageInfo
  }
}
