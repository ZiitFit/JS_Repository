<template>
  <div>
      <div v-for="item in this.$store.state.ask">{{ item.id }}</div>
  </div>
</template>

<script>


export default {

  // data() {
  //   return {
  //     ask: []
  //   }
  // },
  created() {
    this.$store.dispatch('FETCH_ASK');
    // var vm = this;
    // fetchAskList()
    //   .then(function(response){
    //     console.log(response);
    //     vm.ask = response.data;
    //   })
    //   .catch(function(error){
    //     console.log(error)
    //   })
  }
}
</script>

<style>

</style>