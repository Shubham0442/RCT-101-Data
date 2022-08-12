
import './App.css';
import {useSelector, useDispatch} from 'react-redux'


function App() {

  const count = useSelector((state)=>state.count)
  const dispatch = useDispatch()

  const handleAdd =()=>{
    dispatch({type:"INCREMENT_COUNTER"})
  }

  const handleReduce =()=>{
    dispatch({type:"DECREMENT_COUNTER"})
  }

  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <button onClick={handleAdd}>ADD</button>
      <button onClick={handleReduce}>REDUCE</button>
    </div>
  );
}

export default App;
