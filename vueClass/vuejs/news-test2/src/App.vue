<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view></router-view>
    <p>home</p>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'

export default {
  name: 'App',
  components: {
    ToolBar
  }
}
</script>

<style>
body{
  margin:0;
  padding:0;
}
</style>
