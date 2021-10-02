import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from '@/store/types'

Vue.use(Vuex)


const store: StoreOptions<RootState> = {

  state: {
    helloMessage: "hello from os media",

  },

  modules: {

  }

}

export default new Vuex.Store<RootState>(store);


