// topic.js
import { getTopic } from '~/api/cnode';
import { formatDate } from '~/utils/time';

export const state = () => ({
  topic: {},
  loading: false
});
export const actions = {
  getTopic({ commit }, id) {
    commit('setLoading', { loading: true });
    return getTopic(id)
      .then(topic => {
        let t_topic = {};
        if (topic.success) {
          t_topic = topic.data;
        }
        commit('setTopic', { topic: t_topic });
        commit('setLoading', { loading: false });
      })
      .catch(() => {
        commit('setLoading', { loading: false });
      });
  }
};
export const mutations = {
  setTopic(state, { topic }) {
    state.topic = topic;
  },
  setLoading(state, { loading }) {
    state.loading = loading;
  }
};

export const getters = {
  topic(state) {
    if (state.topic) {
      const keys = ['create_at', 'last_reply_at'];
      for (const [key, value] of Object.entries(state.topic)) {
        if (keys.includes(key)) {
          if (value) {
            state.topic[key] = formatDate(value);
          } else {
            state.topic[key] = '';
          }
        }
      }
    }
    return state.topic;
  },
  loading(state) {
    return state.loading;
  }
};
