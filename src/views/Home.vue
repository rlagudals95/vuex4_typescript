<template>
  <div class="home">
    메인화면

  </div>
</template>

<script lang="ts">
import Vue from 'vue'


import { UserMutations } from '@/store/user/mutations'
import { config }  from '../config'
import axios from 'axios'


export default Vue.extend({
  name: 'Home',
  components: {

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
    // this.$store.dispatch("loadApiResult");
    // setTimeout(()=> {
    //   this.username = "change name"
    // },3000);
    console.log(`${config.LocalbaseUrlTest}user/2`);
    axios.get(`${config.LocalbaseUrlTest}user/2`).then((res)=> {
      console.log('테스트 데이터 : ',res);
    }).catch((error)=> {
      console.log("에러발생 : ",error)
    })


  },
   created() {
    setTimeout(()=> {
      this.username = "change name2"
    },6000)
  }
})
</script>
