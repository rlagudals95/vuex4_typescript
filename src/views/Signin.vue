<template>
  <!-- Default form register -->
  <div class="col-10 container" >
      <p class="h4 text-center mb-4">Sign up</p>
      <label class="grey-text">username</label>
      <input type="text" v-model="singup.username" class="form-control"/>
      <br/>
      <label class="grey-text">email</label>
      <input type="email" v-model="singup.email" class="form-control"/>
      <br/>
      <label class="grey-text">passowrd</label>
      <input type="password" v-model="singup.password" class="form-control"/>
      <br/>
      <label class="grey-text">passowrd check</label>
      <input type="password" v-model="singup.passwordChk" class="form-control"/>
      <br/>
      <div class="text-center mt-4">
        <button class="btn btn-unique" v-on:click="signIn" type="button">Register</button>
      </div>
  </div>

</template>


<script>
import axios from "axios"
import { config } from "../config"

export default {
  name:"Signin",
  data (){
    return {
      singup: {
        username:'',
        email:'',
        password: '',
        passwordChk: '',
      }
    }
  },
  methods : {
    signIn: function (){
      console.log('?', this.singup);
      if (this.singup.password != this.singup.passwordChk){
        alert("비밀번호를 확인해 주세요!");
        return
      }
      console.log("요청 url : ",`${config.LocalbaseUrlTest}/join`)
      axios.post(`${config.LocalbaseUrlTest}/join`, {
          username: this.singup.username,
          email: this.singup.email,
          password: this.singup.password
      }).then((res)=> {
        alert('회원가입 완료!');
        console.log(res);
        this.$router.push({name: 'Login'})
      }).catch((Error) => {
        window.alert('회원가입 실패!');
        console.log(Error)
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
