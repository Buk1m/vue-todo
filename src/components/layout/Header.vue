<template>
  <header class="header">
    <h1 class="logo"> <img class="mr-3" src="https://vuejs.org/images/logo.png" width="70px" height="70px" alt="vue-logo.jpg">TodoList</h1>
    
    <div class="nav d-flex justify-content-center">
      <router-link class="btn btn-outline-light mr-2" to="/">Home</router-link>
      <router-link class="btn btn-outline-light ml-2" to="/about">About</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
}

.logo{
    font-size: 5em;
      font-family: 'Indie Flower', cursive;
 
}

.logo > img{
     position:relative;
     top:-8px;
}


</style>
