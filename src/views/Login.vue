<template>
  <!-- Default form register -->
  <div class="col-10 container">
    <form method="POST" @submit.prevent="login" >
      <p class="h4 text-center mb-4">Login</p>
        <label class="grey-text">username</label>
        <input type="id" name="username" v-model="username" class="form-control" />
        <br />
        <label class="grey-text">passowrd</label>
        <input type="password" name="password" v-model="password" class="form-control" />
        <br />
      <div class="text-center mt-4">
        <button class="btn btn-unique" type="submit">
          login
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { config } from "../config";
axios.defaults.baseURL = 'http://localhost:8000'; //서버주소
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';


export default {
  name: "Login",
  data() {
    return {
        username: "",
        password: "",
    };
  },
  methods: {

    login() {
      axios
        .post(`/login`,
           {
             username : this.username,
             password : this.password
           }
        )
        .then(res => {
          console.log('로그인 response : ',res)
          localStorage.setItem("Authorization", res.headers.authorization);
        })
        .catch(Error => {
          alert("아이디 혹은 비밀번호를 확인해 주세요!")
          console.log("로그인에러", Error);
        });
    }
  }
};
</script>

<style>
.container {
  width: 70%;
}
</style>
