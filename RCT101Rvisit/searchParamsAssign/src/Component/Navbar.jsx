import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      to: "/",
      title: "Home",
    },
    {
      to: "/aboutus",
      title: "About Us",
    },
    {
      to: "/contacts",
      title: "Contacts",
    },
    {
      to: "/users",
      title: "Users",
    },
  ];

  const baseStyle = {
    color: "black",
    textDecoration: "none",
    fontWeight:"550",
    fontSize:"20px"
  };
  
  const activeStyle = {
    color: "red",
    textDecoration: "none",
    fontWeight:"550",
    fontSize:"20px"
  };

  return (
    <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
      {links.map((elem) => (
        <NavLink style={({ isActive }) =>
        isActive ? activeStyle : baseStyle} 
         to={elem.to}>{elem.title} </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
