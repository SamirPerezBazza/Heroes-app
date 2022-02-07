
import { useReducer } from 'react';
import { AuthContext } from "./auth/authContext";
import { authReducer } from './auth/authReducer';
import { AppRouter } from "./routers/AppRouter";

const init = () => {
  return {
    logged: true,
    name: "Samir (Temporal)"
  }
}

const HeroesApp = () => {

  const [user, dispatch] = useReducer(authReducer, {}, init)

  //As a Provider, the Context is giving information to all the
  //children components
  return (
    <AuthContext.Provider value={{
      user,
      dispatch
    }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};

export default HeroesApp;
