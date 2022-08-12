import "./App.css";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "./Context/AuthContextProvider";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  const { state } = useContext(AuthContext);
  const { dark, light } = useContext(ThemeContext);
  const [theme, setTheme] = useState(false);
  console.log(dark, light);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  const style1 =  dark;
  const style2 =  light


  return (
    <div className="App" style={theme ? style1 : style2}>
      <hr/>
      <div>
        <button onClick={toggleTheme}>Change Theme</button>
        <Navbar />
      </div>
      <hr />
      <div >{state.isAuth ? <div></div> : <Login />}</div>
    </div>
  ); 
}

export default App;
