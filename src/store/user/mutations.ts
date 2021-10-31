import { MutationTree } from "vuex";
import { UserState } from "./type";

export enum UserMutations {
  SET_USERNAME = "SET_USERNAME",
  LOG_OUT = "LOG_OUT"
}

export const mutations: MutationTree<UserState> = {
  [UserMutations.SET_USERNAME](state, payload: string) {
    state.username = payload;
    state.isLogin = true;
  },
  [UserMutations.LOG_OUT](state) {
    state.isLogin = false;
    state.username = "";
  },
}
