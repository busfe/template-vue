import * as types from './mutation-types';

export default {
  [types.ADD_TODO] (state, { text }) {
    state.todos.push({text, done: false});
  },
  [types.DELETE_TODO] (state, { todo }) {
    state.todos.splice(state.todos.indexOf(todo), 1);
  },
  [types.TOGGLE_TODO] (state, { todo }) {
    todo.done = !todo.done;
  },
  [types.TOGGLE_ALL_TODO] (state, { done }) {
    state.todos.forEach(todo => {
      todo.done = done;
    })
  },
  [types.EDIT_TODO] (state, { todo, value }) {
    todo.text = value;
  },
  [types.CLEAR_COMPLETED_TODO] (state) {
    state.todos = state.todos.filter(todo => !todo.done);
  },
};
