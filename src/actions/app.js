import {
  ENTER_APP,
  FIRST_ENTER_APP,
  LOGIN
} from "./actionTypes"
import AsyncStorage from '@react-native-community/async-storage';



export const firstEntryApp = () => {
  return (dispatch, getState) => {
    AsyncStorage.setItem("entry", "yes").then(() => {
      dispatch({
        type: FIRST_ENTER_APP
      })
    })
  }
}


export const login = (data) => {
  return (dispatch, getState) => {
    AsyncStorage.setItem("logined", data).then(() => {
      dispatch({
        type: LOGIN,
        payload: {
          logined: data
        }
      })
    })
  }
}
export const willEntryApp = () => {
   return (dispatch, getState) => {
     AsyncStorage.multiGet(["user", "entry", "logined"], (err, stores) => {
       let user = stores[0]
       let entry = stores[1]
       let logined = stores[2]
       dispatch({
         type: ENTER_APP,
         payload: {
           user,
           entry,
           logined
         }
       })
     })
   }
}