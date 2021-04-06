import { call, put, takeEvery } from 'redux-saga/effects'
import { api } from '../../api/api'
import { ReducerConsts } from '../../types/ACTypes'
import { ArrayAPIType } from '../../types/stateType'
import { actions } from '../allAC'

function* getHomesWorker () {
  try {
    const response: ArrayAPIType = yield call (api.getAPIHomes)
    yield console.log(response.data)
    yield put (actions.setAPIHomes(response.data))
  } catch (err) {
    console.log (err)
  }
}

export function* getHomesWatcher () {
  yield takeEvery (ReducerConsts.GET_HOMES_SAGA, getHomesWorker)
}