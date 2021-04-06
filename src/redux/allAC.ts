import { ReducerConsts } from "../types/ACTypes";
import { ArrayStateType } from "../types/stateType";

export const actions = {
  getHomes: () => ({type: ReducerConsts.GET_HOMES_SAGA} as const),
  setAPIHomes: (value: ArrayStateType) => ({type: ReducerConsts.SET_API_HOMES, value} as const)
}