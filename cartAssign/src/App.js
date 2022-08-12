
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import FAQ from './Pages/FAQ ';
import Home from './Pages/Home';
import MenPage from './Pages/MenPage';
import Navbar from './components/Navbar';
import Womens from './Pages/Womens';
import style from "./Pages/cart.module.css"
import Cart from './Pages/Cart';
import Footer from './components/Footer';
import Products from './Pages/Products';
import Products1 from './Pages/Products1';
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className={style.container}>
      <Routes>
             <Route path='/' element={<Home/>} ></Route>
             <Route path='/menspage' element={<MenPage/>}></Route>     
             <Route path='/womenspage' element={<Womens/>}></Route>
             <Route path='/womenspage/:id' element={<Products1/>}></Route>
             <Route path='/menspage/:id' element={<Products/>}></Route>
             <Route path='/contactus' element={<ContactUs/>}></Route>
             <Route path='/aboutus' element={<AboutUs/>}></Route>
             <Route path='/faq' element={<FAQ/>}></Route>
             <Route path='/cart' element={<Cart/>}></Route>
             <Route  path='/*' element={<PageNotFound/>}></Route>
      </Routes>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
