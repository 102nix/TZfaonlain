import axios from 'axios';
import { ArrayStateType } from '../types/stateType';

const URL: string = "https://603e38c548171b0017b2ecf7.mockapi.io/homes"

export const api = {
  getAPIHomes () {
    return axios.get<ArrayStateType>(URL)
  }
}