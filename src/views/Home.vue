<template>
  <div class="home">
<<<<<<< HEAD

      <!-- <b-card-group deck>
        <div v-for="(board, index) in this.boardList" v-bind:key="board">
        <b-card title="Title" :img-src="board.url" img-alt="Image" img-top>
          <b-card-text>
            {{board.description}}
          </b-card-text>
          <template #footer>
            <small class="text-muted">Last updated 3 mins ago</small>
          </template>
        </b-card>
        </div>
      </b-card-group> -->
       <v-card
          elevation="24"
          max-width="444"
          class="mx-auto"
        >
          <v-system-bar lights-out></v-system-bar>
          <v-carousel
            :continuous="false"
            :cycle="cycle"
            :show-arrows="false"
            hide-delimiter-background
            delimiter-icon="mdi-minus"
            height="300"
          >
            <v-carousel-item
              v-for="(slide, i) in slides"
              :key="i"
            >
              <v-sheet
                :color="colors[i]"
                height="100%"
                tile
              >
                <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
                >
                  <div class="text-h2">
                    {{ slide }} Slide
                  </div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
          <v-list two-line>
            <v-list-item>
              <v-list-item-avatar>
                <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>John Leider</v-list-item-title>
                <v-list-item-subtitle>Author</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-switch
                  v-model="cycle"
                  label="Cycle Slides"
                  inset
                ></v-switch>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-card>
    </div>

</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import Card from '../components/Card.vue'

export default Vue.extend({
  name: 'Home',
  data () {
    return {
      boardList : ""
    }
  },
  methods:{
    getBoard () {
    axios
      .get('http://api.kcisa.kr/openapi/service/rest/other/getSEMN5601?serviceKey=6f1e1f5d-f25e-44cd-8291-f6d13540e98f&numOfRows=10&pageNo=1',
        { headers: {'Content-Type': 'text/xml'}}
       )
      .then((res)=> {
        console.log('전시회 정보 : ',res);
        this.boardList = res.data.response.body.items.item
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
