import React, { useState } from "react";
import Navbar from "./components/navbar/navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Cart from "./pages/cart/cart";
import Placeorder from "./pages/placeorder/placeorder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";

const App = () => {
  const[showLogin,setShowLogin]= useState(false)
  return (
      <div className="app">
        {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Placeorder />} />
        </Routes>
        <Footer />
        </div>
  );
};

export default App;
