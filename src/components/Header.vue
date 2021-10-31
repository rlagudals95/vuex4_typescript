<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" class="nav-bar">
      <router-link class="link" style ="margin-right: 20px; font-weight: bold;" to="/home">Home</router-link>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
           <b-nav-item @click="moveToLogin" >login</b-nav-item >
           <b-nav-item @click="moveToSignin" >sign in</b-nav-item >
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <!-- <b-navbar-nav class="ml-auto ">
            <b-nav-item-dropdown right >
              <template #button-content >
                <em>User</em>
              </template>

              <b-dropdown-item href="#">login</b-dropdown-item>
              <b-dropdown-item href="#">sign in</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav> -->
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "nav-bar",
  methods: {
    moveToLogin(){
       this.$router.push({name: 'Login'})
    },
    moveToSignin(){
       this.$router.push({name: 'Signin'})
    },

  }
};
</script>

<style scoped>
  .nav-bar{
    padding: 10px  20px;
  }
</style>
