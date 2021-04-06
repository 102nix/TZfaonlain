import { Action } from 'redux'
import { AxiosResponse } from 'axios'
import { ArrayStateType } from './stateType'

export interface IgetAPIModal extends Action {
  getAPIHomes (): Promise<AxiosResponse<ArrayStateType>>
}