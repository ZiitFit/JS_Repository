<template>
  <div class="btnfooter">
      <span v-on:click="clearTodo">Clear All</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo() {
      this.$emit('removeAll')
    }
  }
}
</script>

<style scoped>
  .btnfooter{
    width:30%;
    height:50px;
    margin: 0 auto;
    border-radius: 10px;
    line-height:50px;
    background:#eaeaea;
  }
  .btnfooter span {
    display: block;
    color:red;
  }
</style>