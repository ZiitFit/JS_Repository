<template>
  <div id="app">
    <Tool-bar></Tool-bar>
    <router-view></router-view>
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
body {
  margin:0;
  padding:0;
}
</style>
