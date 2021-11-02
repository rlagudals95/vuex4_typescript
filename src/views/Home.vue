<template>
  <div class="home">
    <Card/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import Card from '../components/Card.vue'

export default Vue.extend({
  name: 'Home',
  components: { Card },
  methods:{
    getBoard () {



    axios
      .get('http://api.kcisa.kr/openapi/service/rest/other/getSEMN5601?serviceKey=6f1e1f5d-f25e-44cd-8291-f6d13540e98f&numOfRows=10&pageNo=1',
        { headers: {'Content-Type': 'text/xml'}}
       )
      .then((res)=> {
        console.log('전시회 정보 : ',res);
      }).catch((err) => {
        console.log('전시회 정보 에러 : ', err);
      })
    }
  },

  created() {
    this.getBoard();
  }


  //  computed: {
  //   helloMessage: {
  //     get (): string {
  //       return this.$store.state.helloMessage; // store에 import한 module 가져옴
  //     }
  //   },
  //   username : {
  //     get ():string {
  //       return this.$store.getters.getUsername; // store에 import한 getters 가져옴
  //     },
  //     set (value:string):void {
  //       this.$store.commit(UserMutations.SET_USERNAME,value); // mounted에서 실행한 결과 반영
  //     }
  //   }
  // },
  // mounted() {
  //   // this.$store.dispatch("loadApiResult");
  //   // setTimeout(()=> {
  //   //   this.username = "change name"
  //   // },3000);
  //   console.log(`${config.LocalbaseUrlTest}user/2`);
  //   axios.get(`${config.LocalbaseUrlTest}user/2`).then((res)=> {
  //     console.log('테스트 데이터 : ',res);
  //   }).catch((error)=> {
  //     console.log("에러발생 : ",error)
  //   })


  // },
  //  created() {
  //   setTimeout(()=> {
  //     this.username = "change name2"
  //   },6000)
  // }
})
</script>
