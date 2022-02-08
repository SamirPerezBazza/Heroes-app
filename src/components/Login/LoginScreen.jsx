import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { types } from "../../types/types";
import { AuthContext } from "../../auth/authContext";


const LoginScreen = () => {

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);


  const handleLogin = () => {
    const action = {
      type: types.login,
      payload: {
        name: "Samir",
      }
    }

    dispatch(action);
    //the "replace" prop is to prevent the page addition to the stack
    navigate('/marvel', { replace: true });
  }

  return (
    <div className="container mt-5">
      <h1>Login Screen</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
