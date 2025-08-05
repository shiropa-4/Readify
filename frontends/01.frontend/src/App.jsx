import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Logo from "./components/logo.jsx";
import Footer from './components/Footer';
 


// page components
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import CategoryBooks from "./pages/CategoryBooks";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Wishlist from "./pages/Wishlist";
import Contact from "./pages/Contact";
import Orders from './pages/Orders.jsx';




function App() {
  return (
    <Router>
      <Logo />
      <Navbar />
      
      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/*<Route path="/home" element={<Home />} />*/}
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:categoryName" element={<CategoryBooks />} />
        <Route path="/register" element={<Register />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/orders" element={<Orders />} />


      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
