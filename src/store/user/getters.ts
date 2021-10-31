import { GetterTree } from "vuex";
import { RootState } from "../types";
import { UserState } from "./type";

export const getters: GetterTree<UserState, RootState> = {

  getUsername(state): string {
    return state.username;
  }
}
