<template>
  <div>
      <p v-for="item in askItems">
        <a v-bind:href="item.url">{{ item.title }}</a>
        <small>{{ item.time_ago }} by {{ item.user }}</small>
      </p>
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