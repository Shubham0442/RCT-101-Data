import React, { useReducer, useState } from "react";
import { counterReducer, instate } from "./reducer";

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, instate);
  const [plusNum, setPlusNum] = useState(0);
  const [minusNum, setMinusNum] = useState(0);

  console.log(state.count);

  return (
    <div>
      <h1>Counter</h1>
      <h1>{state.count}</h1>
      <div style={{ display: "flex", justifyContent:"center", gap:"20px" }}>
        <div>
          <div>
            <input
              type="number"
              value={plusNum}
              onChange={(e) => setPlusNum(e.target.value)}
              placeholder="Enter a value to increment"
            />
          </div>

          <div>
            <button
              onClick={() =>
                dispatch({ type: "INCREMENT_AMOUNT", payload: plusNum })
              }
            >
              INCREMENT
            </button>
          </div>
        </div>
        <div>
          <div>
            <input
              type="number"
              value={minusNum}
              onChange={(e) => setMinusNum(e.target.value)}
              placeholder="Enter a value to decrement"
            />
          </div>

          <div>
            <button
              onClick={() =>
                dispatch({ type: "DECREMENT_AMOUNT", payload: minusNum })
              }
            >
              DECREMENT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
