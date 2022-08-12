
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar"
import Counter from './pages/Counter';
import TodoApp from './pages/TodoApp';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
    <Routes>
          <Route path='/' element={<Counter></Counter>}></Route>
          <Route path='/todoapp' element={<TodoApp></TodoApp>}></Route>
    </Routes>

    </div>
  );
}

export default App;
