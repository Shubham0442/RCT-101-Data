
import './App.css';
import Form from "./components/Form"
import Table from './components/TableItem';
import { useState } from 'react';


function App() {
   
  const [submit, setsubmit] = useState(false)
  
  return (
    <div className="App">
      <Form submit = {submit} setsubmit={setsubmit}/>
      <Table submit = {submit} setsubmit={setsubmit}/>  
    </div>
  );
}

export default App;
