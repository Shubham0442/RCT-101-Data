
import './App.css';
import Stopwatch from './components/Stopwatch';
import Timer from './components/Timer';
import {useState} from "react"


function App() {

  const [display, setdisplay] = useState(true)
  

  return (
    <div className="App">
            <div className="parentDiv"> 
 
              <div onClick={()=>{ if(display===false)setdisplay((display) => !display)}}>Timer</div>
              <div onClick={()=>{if(display===true)setdisplay((display) => !display)}}>Stopwatch</div>
            </div>  
            <div>
              {
                display ? <div> <Timer/></div> : <div><Stopwatch/></div>
              } 
           </div>
    </div>
  );
}

export default App;
