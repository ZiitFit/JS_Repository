<template>
  <div class="btnfooter">
      <span v-on:click="clearTodo">Clear All</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo: function() {
      localStorage.clear();
    }
  }
}
</script>

<style scoped>
  .btnfooter{
    width:80%;
    height:50px;
    margin: 0 auto;
    line-height:50px;
    background:#eaeaea;
  }
  .btnfooter span {
    color:red;
  }
</style>