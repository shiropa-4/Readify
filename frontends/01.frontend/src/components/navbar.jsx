import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css'

const Navbar = () => {
  return (
    
    <nav>
      <ul>
        <li><Link to="/">Home 🏠</Link></li>
        <li><Link to="/categories">Categories 📝</Link></li>
        <li><Link to="/contact">Contact Us📞</Link></li>
        <li><Link to="/orders">Orders 🛒</Link></li>
      </ul>
      <div className="nav-right">
        <ul>
        <li><Link to="/wishlist">Wishlist ❤️</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
