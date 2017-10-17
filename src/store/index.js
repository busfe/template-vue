import vue from 'vue'
import vuex from 'vuex'
import * as actions from './actions.js'
import * as getters from './getters.js'
import state from './state.js'
import mutations from './mutations.js'
import createLogger from 'vuex/dist/logger'

vue.use(vuex)

const debug = process.env.NODE_ENV !== 'production'

const STORAGE_KEY = 'todos-vuejs'

const localStoragePlugin = store => {
  store.subscribe((mutation, { todos }) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  })
}

export default new vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger(), localStoragePlugin] : [localStoragePlugin]
})
