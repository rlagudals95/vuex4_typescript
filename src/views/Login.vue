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
import { UserMutations } from '@/store/user/mutations'


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
        .post(`${config.LocalbaseUrlTest}/login`,
           {
             username : this.username,
             password : this.password
           }
        )
        .then(res => {
          console.log('로그인 response : ',res)
          this.$router.push({name: 'Home'})
          localStorage.setItem("Authorization", res.headers.authorization);
          this.$store.commit(UserMutations.SET_USERNAME,this.username);
        })
        .catch(Error => {
          alert("아이디 혹은 비밀번호를 확인해 주세요!")
          console.log("로그인에러", Error);
        });
    },
  },


};

</script>

<style>
.container {
  width: 70%;
}
</style>
