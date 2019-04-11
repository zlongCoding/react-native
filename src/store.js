import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import createReducer from './reducers'

const store = createStore(
  createReducer(),
  applyMiddleware(ReduxThunk)
);

export default store;


