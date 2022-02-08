
import { useReducer, useEffect } from 'react';
import { AuthContext } from "./auth/authContext";
import { authReducer } from './auth/authReducer';
import { AppRouter } from "./routers/AppRouter";

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false };
}

const HeroesApp = () => {

  //The reducer is defined in the top of the component's tree, this will allow 
  //the access to all the children by the useContext hook.
  const [user, dispatch] = useReducer(authReducer, {}, init)

  useEffect(() => {
    if (!user) return

    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);


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
