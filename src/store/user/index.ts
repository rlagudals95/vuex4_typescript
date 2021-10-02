import { Module } from "vuex";
import { RootState } from "../types";
import { UserState } from "./type";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";

const state: UserState = {
  username: "hmk",
  email: "test@test.com",
  lastLogin: new Date()
}

// index.ts에 각각 기능들을 import해서 사용한다
export const user: Module<UserState, RootState> = {
  state,
  getters, // getters : getters
  mutations,
  actions
}
