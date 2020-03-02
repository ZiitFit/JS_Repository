<template>
  <div class="header">
      <router-link to="/news">News</router-link> |
      <router-link to="/ask">Ask</router-link> |
      <router-link to="/jobs">Jobs</router-link> |
      <router-link to="/item">Item</router-link> |
      <router-link to="/user">User</router-link>
  </div>
</template>

<style scoped>
.header {
    display:block;
    padding: 8px;
    color:#fff;
    background:#42b883;
}
.header .router-link-exact-active {
    color: #35495e;
}
.header a{
    color:#fff;
}
</style>