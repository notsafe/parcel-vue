import api from '../api/message'
import * as types from '../types'

const state = {
  message: []
}

// getters
const getters = {
  message: state => state.message
}

// actions
const actions = {
  getMessage ({ commit, state }, message) {
    api.getMessage(message, (message) => commit(types.UPDATE_MESSAGE, message))
  }
}

// mutations
const mutations = {
  [types.UPDATE_MESSAGE] (state, { message }) {
    state.message = message
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
