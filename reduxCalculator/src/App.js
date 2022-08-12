import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Sum, Minus, INCRE, DECRE, Mult, Devide } from "./action";
import style from "./cal.module.css";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const [input, setInput] = useState("");

  console.log(count);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="App">
      <h2>CUSTOM CALCULATOR</h2>
      <div className={style.output}>
        <h1>{count}</h1>
      </div>

      <div className={style.container}>
        <button onClick={() => dispatch(Sum(1))}>Increment</button>
        <button onClick={() => dispatch(Minus(1))}>Decrement</button>
      </div>

      <div>
        <input placeholder="Enter value" type="text" onChange={handleChange} />
      </div>

      <div className={style.calbtn}>
        <button onClick={() => dispatch(INCRE(input))}>+</button>
        <button onClick={() => dispatch(DECRE(input))}>-</button>
        <button onClick={() => dispatch(Mult(input))}>x</button>
        <button onClick={() => dispatch(Devide(input))}>/</button>
      </div>
    </div>
  );
}

export default App;
