import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/categories.css';

const categories = [
  "Fiction",
  "NonFiction",
  "Science",
  "Biography",
  "Comics",
  "Romance",
  "Self-Help",
  "Mystery",
  "Adventure"
];

const Categories = () => {
  const navigate = useNavigate();

  return (
    <div className="categories-container">
      <h2>Browse Categories</h2>
      <div className="categories-grid">
        {categories.map((genre, index) => (
          <div className={`category-card ${genre.toLowerCase()}`} key={index} onClick={() => navigate(`/category/${genre.toLowerCase()}`)}
            style={{ cursor: 'pointer' }} >
            <div className="overlay" />
            <h3>{genre}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
