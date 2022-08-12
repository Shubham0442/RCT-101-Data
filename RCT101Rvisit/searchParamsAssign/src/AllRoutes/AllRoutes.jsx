import React from 'react'
import Home from "./Home";
import AboutUs from "./AboutUs";
import { Routes, Route } from "react-router-dom";
import Contacts from './Contacts';
import Users from './Users';
import UsersPage from './UsersPage';

const AllRoutes = () => {
  return (
    <div>
     <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/contacts" element={<Contacts/>}></Route>
        <Route path="/users" element={<Users/>}></Route>
        <Route path="/users/:id" element={<UsersPage/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRoutes