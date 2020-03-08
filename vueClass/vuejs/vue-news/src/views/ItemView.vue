<template>
  <div>
    <p v-for="item in items">{{ item.title }}</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      items: []
    }
  },
  created() {
    
  }
}
</script>

<style>

</style>