<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <TodoHeader/>
    <TodoInput v-on:addTodoItem="addOneItem"/>
    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"/>
    <TodoFooter v-on:removeAll="removeAllItem"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import TodoHeader from '@/components/TodoHeader.vue'
import TodoInput from '@/components/TodoInput.vue'
import TodoList from '@/components/TodoList.vue'
import TodoFooter from '@/components/TodoFooter.vue'

export default {
  name: 'home',
  data() {
    return {
      todoItems: []
    }
  },
  methods: {
    addOneItem(todoItem) {
      const obj = {
        completed: false,
        item: todoItem
      }
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem(todoItem, index) {
      // eslint-disable-next-line no-undef
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1)
    },
    toggleOneItem(todoItem, index) {
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    removeAllItem() {
      localStorage.clear();
      this.todoItems = '';
    }
  },
  components: {
    HelloWorld,
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
}
</script>
