<template>
  <div id="nav">
    <b-navbar type="dark" toggleable="lg" variant="dark">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#"
            ><router-link to="/">Home</router-link></b-nav-item
          >
          <b-nav-item href="#"
            ><router-link to="/about">About</router-link>
          </b-nav-item>

          <b-nav-item href="#"
            ><router-link to="/cart">Cart</router-link></b-nav-item
          >

           <b-nav-item href="#"
            ><router-link to="/admin">Admin</router-link></b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "Navbar",
  data() {
    return {};
  },
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nav[data-v-7ba5bd90] {
  padding: 0px;
}

#nav a {
  /* color: white; */
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.dropdown-menu {
  color: #212529;
}
</style>
