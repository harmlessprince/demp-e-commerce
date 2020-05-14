<template>
  <div class="admin">{{ msg }}
    <router-view></router-view>
  </div>
  
</template>
<script>
export default {
  name: "Admin",
  data() {
    return {
      msg: "Welcome to Admin Page"
    };
  }
};
</script>
<style lang="stylus"></style>
