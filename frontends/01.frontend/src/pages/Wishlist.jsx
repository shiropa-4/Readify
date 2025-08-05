import React, { useEffect, useState } from 'react';
import '../styles/wishlist.css'

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(storedWishlist);
  }, []);

  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter((book) => book._id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  return (
    <div className="wishlist-container">
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No books in your wishlist.</p>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map((book, index) => (
            <div key={index} className="book-card">
              <img src={book.image} alt={book.name} />
              <h4>{book.name}</h4>
              <p>Author: {book.author}</p>
              <p>Price: {book.price}</p>
              <a href={book.pdfLink} target="_blank" className="pdf-link">Read PDF</a>
              <button onClick={() => removeFromWishlist(book._id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
