const STORAGE_KEY = 'todos-vuejs'

export default {
  todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
}
