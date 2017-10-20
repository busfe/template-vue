import * as types from './mutation-types';

export const addTodo = function addTodo ({ commit }, payload) {
  commit(types.ADD_TODO, payload);
}

export const deleteTodo = function deleteTodo ({ commit }, payload) {
  commit(types.DELETE_TODO, payload);
}

export const editTodo = function editTodo ({ commit }, payload) {
  commit(types.EDIT_TODO, payload);
}

export const toggleTodo = function toggleTodo ({ commit }, payload) {
  commit(types.TOGGLE_TODO, payload);
}

export const toggleAll = function toggleAll ({ commit }, payload) {
  commit(types.TOGGLE_ALL_TODO, payload);
}

export const clearCompleted = function clearCompleted ({ commit }, payload) {
  commit(types.CLEAR_COMPLETED_TODO, payload);
}
