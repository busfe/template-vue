import vue from 'vue';
import vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import * as actions from './actions';
import getters from './getters';
import state from './state';
import mutations from './mutations';


vue.use(vuex);

const debug = process.env.NODE_ENV !== 'production';

const STORAGE_KEY = 'todos-vuejs';

const localStoragePlugin = (store) => {
  store.subscribe((mutation, { todos }) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  });
};

export default new vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger(), localStoragePlugin] : [localStoragePlugin],
});
