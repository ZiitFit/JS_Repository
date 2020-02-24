<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <TodoHeader/>
    <TodoInput/>
    <TodoList v-bind:propsdata="todoItems"/>
    <TodoFooter/>
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
  data: function() {
    return {
      todoItems: []
    }
  },
  created: function() {
    if (localStorage.length > 0 ){
      for (var i = 0; i < localStorage.length; i++){
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
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
