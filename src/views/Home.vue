<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="username"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import { UserMutations } from '@/store/user/mutations'

export default Vue.extend({
  name: 'Home',
  components: {
    HelloWorld
  },
   computed: {
    helloMessage: {
      get (): string {
        return this.$store.state.helloMessage; // store에 import한 module 가져옴
      }
    },
    username : {
      get ():string {
        return this.$store.getters.getUsername; // store에 import한 getters 가져옴
      },
      set (value:string):void {
        this.$store.commit(UserMutations.SET_USERNAME,value); // mounted에서 실행한 결과 반영
      }
    }
  },
  mounted() {
    this.$store.dispatch("loadApiResult");
    setTimeout(()=> {
      this.username = "change name"
    },3000)
  },
   created() {
    setTimeout(()=> {
      this.username = "change name2"
    },6000)
  }
})
</script>
