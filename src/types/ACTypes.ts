import { actions } from "../redux/allAC"

export enum ReducerConsts {
  GET_HOMES_SAGA = 'GET_HOMES_SAGA',
  SET_API_HOMES = 'SET_API_HOMES'
}

type PropertiesType<T> = T extends {[key: string]: infer U}? U : never 
export type ActionsType = ReturnType<PropertiesType<typeof actions>>
