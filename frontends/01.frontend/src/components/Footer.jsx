import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>@ {new Date().getFullYear()} Bookworm. All rights reserved.</p>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/wishlist">Wishlist</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
