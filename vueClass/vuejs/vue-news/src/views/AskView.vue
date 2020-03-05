<template>
  <div>
      <div v-for="item in askItems">{{ item.id }}</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  // data() {
  //   return {
  //     ask: []
  //   }
  // },
  computed: {
    // #3
    ...mapGetters({
      askItems :'fetchedAsk'
    }),

    // #2
    // ...mapState({
    //   ask: state => state.ask
    // })

    // #1
    // ask() {
    //   return this.$store.state.ask;
    // }
  },
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