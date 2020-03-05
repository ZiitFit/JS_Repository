<template>
  <div>
      <div v-for="job in this.$store.state.jobs">{{ job.url }}</div>
  </div>
</template>

<script>


export default {
  // data() {
  //   return {
  //     jobs:[]
  //   }
  // },
  created() {
    this.$store.dispatch('FETCH_JOBS');
    // fetchJobsList()
    //   .then(response => this.jobs = response.data)
    //   .catch(error => console.log(error))
  }
}
</script>

<style>

</style>