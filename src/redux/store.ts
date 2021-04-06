import { createStore, combineReducers, applyMiddleware } from 'redux'
import homesReducer from './homesReduser'
import createSagaMiddleware from 'redux-saga'
import { getHomesWatcher } from './saga/getHomesSaga'

const sagaMiddleware = createSagaMiddleware()

let rootReducer = combineReducers({
  homesReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

const store =  createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(getHomesWatcher)

export default store