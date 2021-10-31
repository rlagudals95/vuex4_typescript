/* eslint-disable*/
<template>
  <div id="app">
    <Header/>

    <router-view />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Header from "./components/Header.vue"
import axios from "axios"
//axios.defaults.baseURL = 'http://localhost:8000'; //서버주소
//axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
//axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
//axios.defaults.headers.common['Authorization'] = localStorage.getItem("Authorization");

export default Vue.extend({
  components: { Header },
  computed: {
    helloMessage: {
      get(): string {
        return this.$store.state.user;
      }
    }
  }
});
</script>

<style>
* {
  text-decoration: none !important;
}

.link {
  color: white;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


</style>
/* eslint-enable*/
