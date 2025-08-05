import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "../styles/categoryBooks.css";

const CategoryBooks = () => {
  const { categoryName } = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/books/${categoryName}`);
        const data = await res.json();
        setBooks(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching books:", error);
        setLoading(false);
      }
    };

    fetchBooks();
  }, [categoryName]);

  if (loading) return <p>Loading...</p>;
  if (!books || books.length === 0) return <h2>No books found for "{categoryName}"</h2>;

  const addToWishlist = (book) => {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    const exists = wishlist.find((item) => item._id === book._id);
    if (exists) {
      alert("Book already in wishlist");
      return;
    }

    wishlist.push(book);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    alert("Added to wishlist");
  };

 const handleBuyNow = async (book) => {
  try {
    const response = await fetch("http://localhost:5000/api/orders/buy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bookId: book._id }),
    });

    if (!response.ok) {
      throw new Error("Something went wrong while placing the order");
    }

    alert(`You successfully bought "${book.name}"`);

    // Navigates to orders page
    navigate("/orders");
  } catch (error) {
    console.error("Buy Now error:", error);
    alert("Failed to place the order. Please try again.");
  }
};



  return (
    <>
      <div className="category-books">
        <h2 className="category-title">
          Browse through a wide ranging variety of {categoryName} books!
        </h2>
      </div>

      <div className="books-container">
        {books.map((book, index) => (
          <div className="book-card" key={index}>
            <img src={book.image} alt={book.name} />
            <div className="book-info">
              <h4>{book.name}</h4>
              <p>{book.price}</p>
              <p>{book.author}</p>
              <a href={book.pdfLink} target="_blank" className="pdf-link" rel="noreferrer">Read PDF</a>
              <button className="wishlist-button" onClick={() => addToWishlist(book)}>Add to wishlist❤️</button>
              <button className="buy-now-button" onClick={() => handleBuyNow(book)}>Buy Now 🛒</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoryBooks;
