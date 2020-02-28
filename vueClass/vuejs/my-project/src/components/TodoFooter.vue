<template>
  <div class="btnfooter">
      <span v-on:click="clearTodo">Clear All</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo: function() {
      this.$emit('removeAll')
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
    display: block;
    color:red;
  }
</style>