<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar'

export default {
  components: {
    ToolBar,
  }
  // methods: {
  //   fetchData() {
  //     console.log('hello');
  //   }
  // }
}
</script>

<style>
body {
  margin:0;
  padding:0;
}
</style>
