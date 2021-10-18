<template>
  <!-- Default form register -->
  <div class="col-10 container" >
      <p class="h4 text-center mb-4">Login</p>
      <label class="grey-text">username</label>
      <input type="email" v-model="loginData.username" class="form-control"/>
      <br/>
      <label class="grey-text">passowrd</label>
      <input type="password" v-model="loginData.password" class="form-control"/>
      <br/>
      <div class="text-center mt-4">
      <button class="btn btn-unique" v-on:click="login" type="button">login</button>
      </div>
  </div>

</template>

<script>
import axios from 'axios'
import {config} from "../config"

export default {
  name: "Login",
  data (){
    return {
      loginData: {
        username:"",
        password:""
      }
    }
  },
  methods: {
    login (){
      axios.post(`${config.LocalbaseUrlTest}/auth/login`, this.loginData).then((res)=> {
        console.log('res:',res);
        console.log('주소',`${config.LocalbaseUrlTest}/api/user/login`)
        //this.$router.push({name:'Home'});
      }).catch((Error)=> {
        console.log('로그인에러',Error)
      })
    }
  }

}
</script>

<style>
.container {
  width: 70%;
}

</style>
