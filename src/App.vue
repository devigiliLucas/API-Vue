<template>
  <div id="app">
    <Navbar />
    <div>
      <router-view />
    </div>
  </div>
</template>

<script lang="js">
import Navbar from "./components/Navbar.vue";

export default {
  name: "app",
  components: {
    Navbar,
  },
};
</script>

<style>
* {
  margin: 0px;
  font-family: "Times New Roman", Times, serif;
}
</style>
