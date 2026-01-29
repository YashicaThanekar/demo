import React from "react";

const BookDetailCard = ({ book, onClose }) => {
  if (!book) return null;

  return (
    <div className="detail-overlay" onClick={onClose}>
      <div className="detail-card" onClick={(e) => e.stopPropagation()}>
        <button className="detail-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <div className="detail-content">
          <div className="detail-left">
            <img src={book.image} alt={book.title} className="detail-image" />
          </div>
          <div className="detail-right">
            <h2 className="detail-title">{book.title}</h2>
            <p className="detail-author">by {book.author || "Unknown"}</p>
            <p className="detail-status">
              Status:{" "}
              <span className={`book-status ${book.status.toLowerCase()}`}>
                {book.status}
              </span>
            </p>
            <div className="detail-desc">
              {book.description || "No description available."}
            </div>
            <div className="detail-actions">
              <button className="issue-button">Issue Book</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailCard;
