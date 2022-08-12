import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import Authenticate from "./Authenticate";

const Navbar = () => {
  const { state, setState } = useContext(AuthContext);
  
  const handleLogout = () => {
    setState({
      ...state,
      isAuth: false,
      token: "",
    });
  };
  return (
    <div >
      {state.isAuth ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            margin: "auto",
            gap: "10px",
            justifyContent: "right",
            alignItems: "center",
          }}
        >
          <button onClick={handleLogout}>Logout</button>
          <Authenticate />
        </div>
      ) : (
        <div>Login</div>
      )}
    </div>
  );
};

export default Navbar;
