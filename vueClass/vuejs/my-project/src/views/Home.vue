<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <TodoHeader/>
    <TodoInput/>
    <TodoList/>
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
  components: {
    HelloWorld,
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
}
</script>
