import { useNavigate } from "react-router-dom";

const LoginScreen = () => {

  const navigate = useNavigate();


  const handleLogin = () => {
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
