import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Todo from '../Pages/Todo'
import Login from './Login'
import Navbar from './Navbar'
import PivateRoute from './PivateRoute'

const AllRoutes = () => {
  return (
    <div>
        <hr />
        <Navbar/>
        <hr/>
        <Routes>
            <Route path="/" element={
                <PivateRoute>
                 <Home/>
               </PivateRoute>
            }/>
            <Route path="/todo" element={<Todo/>}/>
            <Route path="/login" element={<Login/>}/>
            {/* <Route path="/" element={}/>
            <Route path="/" element={}/> */}
        </Routes>
    </div>
  )
}

export default AllRoutes