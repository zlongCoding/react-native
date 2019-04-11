import { combineReducers } from 'redux'
import app from "./app"

const reducers = {
  app
}
export default function createReducer() {
  return combineReducers(reducers)
}