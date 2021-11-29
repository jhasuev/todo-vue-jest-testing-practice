import { createStore } from 'vuex'
const STORAGE_KEY = "VUE_TODO_LIST"
const store = createStore({
  state: {
    todo: JSON.parse(localStorage[STORAGE_KEY] || '[]')
  },
  mutations: {
    ADD_ITEM(state, text) {
      state.todo.unshift({ text, done: false })
      this.commit("SAVE")
    },

    REMOVE_ITEM(state, index) {
      state.todo.splice(index, 1)
      this.commit("SAVE")
    },

    DONE_ITEM(state, { index, done }) {
      state.todo[index].done = done
      this.commit("SAVE")
    },

    SAVE(state) {
      localStorage[STORAGE_KEY] = JSON.stringify(state.todo)
    },
  },

  getters: {
    getTodoList: state => state.todo
  },
})
export default store;
