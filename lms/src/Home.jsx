import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import "./Home.css";
import books from "./components/Booklist";
import BookDetailCard from "./components/BookDetailCard";

const Home = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const userData = JSON.parse(user);
      setUsername(userData.moodle_id);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div>
      <nav>
        <img
          className="logo-image"
          src="/assets/apsit.png"
          alt="Library Logo"
        />
        <h1>PCT's A. P. Shah Institute of Technology</h1>
        <div className="user-section">
          <span className="user-greeting">Hi, {username}</span>
          <button className="logout-button" onClick={handleLogout}>
            <i className="fa-solid fa-right-from-bracket"></i> Logout
          </button>
        </div>
      </nav>
      <div className="search-filter-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for books..."
        />
        <button className="filter-button">
          <img src="/assets/filter-icon.png" alt="Filter" />
        </button>
      </div>

      <div className="book-grid">
        {books.map((book) => (
          <div
            className="book-card"
            key={book.id}
            onClick={() => setSelectedBook(book)}
          >
            <img src={book.image} alt={book.title} className="book-image" />
            <h4>{book.title}</h4>
            <span className={`book-status ${book.status.toLowerCase()}`}>
              {book.status}
            </span>
          </div>
        ))}
      </div>

      {selectedBook && (
        <BookDetailCard
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
        />
      )}
    </div>
  );
};

export default Home;
