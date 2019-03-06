<template>
  <div id="app" >
    <div id="nav">
      <Header/>
    </div>
    <div class="p-3">
    <router-view/>
    </div>
  </div>
</template>

<script>
import Header from "./components/layout/Header";    
export default {
  name: "app",
  components: {
    Header
  }
  
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial;
  line-height: 1.4;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
