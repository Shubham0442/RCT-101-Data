import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { loginApi } from "../store/Auth/auth.action";

const Login = () => {
 
  const dispatch = useDispatch() 
  const {isAuth} = useSelector((state)=>state.auth)
  const location = useLocation();
  const navigate = useNavigate();

  const [loginCreds, setLoginCreds] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO
    dispatch(loginApi(loginCreds))
    //navigate("/");
  }; 

   
  useEffect(() => {
    
  if(isAuth)
  {
    console.log(location)
    navigate(location.state.pathname || "/",{replace:true})
  }
   
  }, [isAuth])
  

 

  return (
    <div>
      Login
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          maxWidth: "200px",
          gap: "10px",
        }}
      >
        <input
          data-cy="login-email"
          name="email"
          type="email"
          placeholder="Enter Email"
          value={loginCreds.email}
          onChange={hanldeChange}
        />
        <input
          data-cy="login-password"
          name="password"
          type="password"
          placeholder="Enter Password..."
          value={loginCreds.password}
          onChange={hanldeChange}
        />
        <button data-cy="login-submit" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
