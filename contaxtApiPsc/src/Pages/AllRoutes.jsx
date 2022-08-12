import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Login from './Login'
import Home from './Home'
import Users from './Users'
import PrivateRoute from '../components/PrivateRoute'
import UserPage from "../Pages/UserPage"

const AllRoutes = () => {
  return (
    <div>
            <Navbar></Navbar>
            <div>
                <Routes>
                    <Route path='/' element={<div><Home/></div> }></Route>
                    <Route path='/login' element={<div><Login/></div>}></Route>
                    <Route path='/users' element={<div><PrivateRoute> <Users/> </PrivateRoute> </div>}></Route>
                    <Route path='/users/:id' element={<div><PrivateRoute> <UserPage/> </PrivateRoute> </div>}></Route>
                </Routes>
            </div>
    </div>
  )
}

export default AllRoutes