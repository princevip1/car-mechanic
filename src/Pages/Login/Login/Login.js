import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { signInGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";
  console.log(location.state?.from);

  const handleGoogleLogin = () => {
    signInGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };

  return (
    <div>
      <h2>please Login</h2>
      <button onClick={handleGoogleLogin} className="btn btn-primary">
        {" "}
        Login with google
      </button>
    </div>
  );
};

export default Login;
