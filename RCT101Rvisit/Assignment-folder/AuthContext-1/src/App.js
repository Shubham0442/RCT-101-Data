
import './App.css';
import Authenticate from './Components/Authenticate';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import {useContext} from "react"
import { AuthContext } from './Context/AuthContextProvider';

function App() {
  const { state, setState } = useContext(AuthContext);
  return (
    <div className="App">
     
      <hr/>
      <div>
          <Navbar/>
          
      </div>
        
         <hr/>
         <div>
         { state.isAuth ? <div></div> : <Login/>}
         </div>
        
         
    </div>
  );
}

export default App;
