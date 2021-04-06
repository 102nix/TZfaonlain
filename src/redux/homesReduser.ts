import { ActionsType, ReducerConsts } from "../types/ACTypes";
import { ArrayAPIType } from "../types/stateType"

let initialState: ArrayAPIType = {
  data: null
}

const homesReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case ReducerConsts.SET_API_HOMES: 
      return {
        ...state,
        data: action.value
      }
    default: return state
  }
}

export default homesReducer