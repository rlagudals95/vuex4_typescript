import { MutationTree } from "vuex";
import { UserState } from "./type";

export enum UserMutations {
  SET_USERNAME = "SET_USERNAME",
  SET_CATS_FACTS = "SET_CATS_FACTS"
}

export const mutations: MutationTree<UserState> = {
  [UserMutations.SET_USERNAME](state, payload: string) {
    state.username = payload;
  },
  [UserMutations.SET_CATS_FACTS](state, payload: string) {
    state.cats = payload;
  }


}
