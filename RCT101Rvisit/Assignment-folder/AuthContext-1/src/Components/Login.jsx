import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

const Login = () => {
  const { state, setState } = useContext(AuthContext);
  const[loginData, setLoginData]=useState("")
  const [form, setForm] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  console.log("data before", state)
  const handleLogin = (e) => {
    e.preventDefault()
   
    axios
      .post("https://reqres.in/api/login", {
        email: form.email,
        password: form.password,
      })
      .then((res) => {
        console.log(res.data);
        setLoginData(res.data) 
        setState({
          ...state,
          isAuth: true,
          token: res.data.token
        })
      })
      .catch((error) => {
        console.log(error.message);
        //toggleAuth(isAuth);
      });
  };
 
  console.log("data after", state)
  // if(loginData.token === "QpwL5tke4Pnpja7X4" && isAuth === false)
  // {
  //      toggleAuth(true)
  // }
 

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            placeholder="Enter email"
            name="email"
            onChange={handleChange}
            value={form.email}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            onChange={handleChange}
            value={form.password}
          />
        </div>
        <div>
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
};

export default Login;
