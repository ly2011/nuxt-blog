// topic.js
import { getTopic, addTopic, updateTopic, collectTopic, delTopic } from '~/api/cnode'
import { formatDate } from '~/utils/time'
import { topTabs } from '~/utils/tabs'

export const state = () => ({
  topic: {},
  loading: false
})
export const actions = {
  getTopic({ commit }, params = {}) {
    commit('setLoading', { loading: true })
    return getTopic(params)
      .then((topic) => {
        let t_topic = {}
        if (topic.success) {
          t_topic = topic.data
        }
        commit('setTopic', { topic: t_topic })
        commit('setLoading', { loading: false })
      })
      .catch(() => {
        commit('setLoading', { loading: false })
      })
  },
  addTopic({ commit }, params = {}) {
    commit('setLoading', { loading: true })
    return new Promise((resolve, reject) =>
      addTopic(params)
        .then((topic) => {
          commit('setLoading', { loading: false })
          resolve(topic)
        })
        .catch((error) => {
          commit('setLoading', { loading: false })
          reject(error)
        })
    )
  },
  updateTopic({ commit }, params = {}) {
    commit('setLoading', { loading: true })
    return new Promise((resolve, reject) =>
      updateTopic(params)
        .then((topic) => {
          commit('setLoading', { loading: false })
          resolve(topic)
        })
        .catch((error) => {
          commit('setLoading', { loading: false })
          reject(error)
        })
    )
  },
  collectTopic({ commit }, params = {}) {
    commit('setLoading', { loading: true })
    return new Promise((resolve, reject) =>
      collectTopic(params)
        .then((topic) => {
          commit('setLoading', { loading: false })
          resolve(topic)
        })
        .catch((error) => {
          commit('setLoading', { loading: false })
          reject(error)
        })
    )
  },
  delTopic({ commit }, params = {}) {
    commit('setLoading', { loading: true })
    return new Promise((resolve, reject) =>
      delTopic(params)
        .then((topic) => {
          commit('setLoading', { loading: false })
          resolve(topic)
        })
        .catch((error) => {
          commit('setLoading', { loading: false })
          reject(error)
        })
    )
  },
  setTopic({ commit }, params = {}) {
    return new Promise((resolve, reject) => {
      commit('setTopic', params)
      resolve()
    })
  }
}
export const mutations = {
  setTopic(state, { topic }) {
    state.topic = topic
  },
  setLoading(state, { loading }) {
    state.loading = loading
  }
}

export const getters = {
  topic(state) {
    if (state.topic) {
      const keys = ['create_at', 'last_reply_at']
      for (const [key, value] of Object.entries(state.topic)) {
        if (keys.includes(key)) {
          if (value) {
            state.topic[key] = formatDate(value)
          } else {
            state.topic[key] = ''
          }
        }
        if (key === 'tab') {
          const tmp_tab = topTabs.filter(item => item.tab === value)[0] || {}
          state.topic.tabName = tmp_tab.title || ''
        }
      }
    }
    return state.topic
  },
  loading(state) {
    return state.loading
  }
}
