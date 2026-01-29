import React from "react";
import "./App.css";
import "./Home.css";


const Home = () => {
  return (
    <div>
      {/* <div className="home-container">
        <div className="logo">
          <img
            className="logo-image"
            src="/assets/apsit.png"
            alt="Library Logo"
          />
        </div>
        <h2>Library Management System</h2>
        <p>An intelligent library management system with book recommendation</p>

        <button>More Info</button>
      </div>
      <div className="all-books">
      <h2>All Books</h2>
      <div className="books-list">
        
         <div className="book-grid">
          <h3>Book Title 1</h3>
          <p>Author: Author Name 1</p>
        </div>
         </div>
      </div> */}
      <nav>
        <img className="logo-image" src="/assets/apsit.png" alt="Library Logo" />
        <h1>PCT's A. P. Shah Institute of Technology</h1>
      </nav>
      <div className="search-filter-container">
      <input type="text" className="search-bar" placeholder="Search for books..." />
      <button className="filter-button"><img src="/assets/filter-icon.png" alt="Filter" /></button>
      </div>
    </div>
    
  );
};

export default Home;
