import { ActionTree } from "vuex";
import { RootState } from "../types";
import { UserState } from "./type";

export const actions: ActionTree<UserState, RootState> = {
  loadApiResult({commit}): Promise<Array<object>> {
    return fetch(`https://cat-fact.herokuapp.com/facts`).then(data => data.json()).then(data => {
      console.log('api');
      console.log(data);
      commit("SET_CATS_FACTS", data)
      return data;
    })
  }
}
