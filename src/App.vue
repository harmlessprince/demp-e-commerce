<template>
  <div id="app" class="container">
    <Navbar /><br><br>
    
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/admin">Admin</router-link> |
      <router-link to="/cart">Cart</router-link>
    </div> -->


    <router-view />
   
  </div>
</template>


<script>
// @ is an alias to /src


// import New from "@/views/New";
// import Products from "@/views/Products";
// import Edit from "@/views/Edit";
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: {
    Navbar,
 
  }
};
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
