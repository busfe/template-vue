import * as types from './mutation-types.js'

export const addTodo = function ({commit}, payload) {
  commit(types.ADD_TODO, payload)
}

export const deleteTodo = function ({commit}, payload) {
  commit(types.DELETE_TODO, payload)
}

export const editTodo = function({commit}, payload) {
  commit(types.EDIT_TODO, payload)
}

export const toggleTodo = function({commit}, payload) {
  commit(types.TOGGLE_TODO, payload)
}

export const toggleAll = function({commit}, payload) {
  commit(types.TOGGLE_ALL_TODO, payload)
}

export const clearCompleted = function({commit}, payload) {
  commit(types.CLEAR_COMPLETED_TODO, payload)
}