import Vue from 'vue'
import Vuex from 'vuex'
// import * as getters from './getters'
// import * as mutations from './mutations'
import todoApp from './modules/todoApp'

Vue.use(Vuex)

// eslint-disable-next-line no-unused-vars
const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0 ){
      for (let i = 0; i < localStorage.length; i++){
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  }
}; // ---> todoApp.js로 옮김

export const store = new Vuex.Store({
  modules: {
    todoApp
  },
  // state: {
  //   // headerText: 'Todo it!'
  //   todoItems: storage.fetch()
  // },
  // getters: getters, // -> 축약 : getters,
  // mutations: mutations, // 축약 : mutations,
  // getters:{
  //   storedTodoItems(state){
  //     return state.todoItems;
  //   }
  // },
  // mutations: {
  //   addOneItem(state, todoItem) {
  //     const obj = { completed: false, item: todoItem };
  //     localStorage.setItem(todoItem, JSON.stringify(obj));
  //     state.todoItems.push(obj);
  //   },
  //   removeOneItem(state, payload) {
  //     localStorage.removeItem(payload.todoItem.item);
  //     state.todoItems.splice(payload.index, 1)
  //   },
  //   toggleOneItem(state, payload) {
  //     state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
  //     localStorage.removeItem(payload.todoItem.item);
  //     localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
  //   },
  //   removeAllItem(state) {
  //     localStorage.clear();
  //     state.todoItems = '';
  //   }
  // },
  actions: {
  }
})
