// import logo from './logo.svg';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Banner/Home';

import Login from './components/Shared/Login';
import Signup from './components/Shared/Signup/Signup';
import MobileItem from './components/Products/ElectronicsProducts/MobileItem';
import ProductDetails from './components/ProductDetails/ProductDetails';



function App() {
  return (
    <div className="App">
      <header className="">
        <BrowserRouter>
       <Routes>

       <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path = "/signup" element={<Signup/>}/>
      <Route path = "/login" element={<Login/>}/>
      <Route path="/products" element={<MobileItem/>}/>
      <Route path="/details/:id" element={<ProductDetails/>}/>

        </Routes>
</BrowserRouter>
      
      </header>
    </div>
  );
}

export default App;
