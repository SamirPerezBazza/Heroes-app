import { types } from "../types/types";

// const state = {
//   name: 'Samir',
//   logged: true
// }


export const authReducer = (state = {}, action) => {

  //Depending on the action given, it will return different values
  switch (action.type) {
    //If the case is Login, the payload is destructured and the
    //"logged" prop is set to "true"
    case types.login:
      return {
        ...action.payload,
        logged: true,
      }
    //If the case is Logout, the prop "logged" is set to false
    case types.logout:
      return {
        logged: false,
      }

    default:
      return state;
  }

}