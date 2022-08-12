import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Todo from "./Todo"
import Home from './Home'
import TodoList from './TodoList'
const AllRoutes = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Routes>
            <Route path='/' element={<Home></Home>}>Home</Route>
            <Route path="/todo" element = {<Todo></Todo>}></Route>
            <Route path="/todo/:id" element = {<TodoList></TodoList>}></Route>
        </Routes>

    </div>
  )
}

export default AllRoutes