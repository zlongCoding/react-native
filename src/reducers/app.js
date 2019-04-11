import {
  FIRST_ENTER_APP,
  ENTER_APP,
  LOGIN
} from "../actions/actionTypes"
import { loginoutState }from "../config/app"
const initialState = {
  user: null,
  entry: null,
  logined: loginoutState,
}
export default appReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIRST_ENTER_APP:
      return { 
        ...state,
        entry: true,
       }
    case LOGIN:
      return {
        ...state,
        logined: action.payload.logined,
      }
    case ENTER_APP:
      let user = action.payload.user
      let entry = action.payload.entry
      let logined = action.payload.logined
      let userData, entryData
      if (user && user[1]) {
        userData = JSON.parse(user[1])
      }
      if (entry && entry[1] == "yes") {
        entryData = true
      }
      return {
        ...state,
        user: userData || {},
        entry: entryData,
        logined: logined
      }
    default:
      return state
  }
}