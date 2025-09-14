import React, { useState } from "react";
import "./App.css";

export default function Library() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");

  const addBook = () => {
    if (title.trim() === "") return;
    setBooks([...books, { id: Date.now(), title }]);
    setTitle("");
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="library-container">
      <div className="library-management">
        <h2>Library Management</h2>
        <input
          type="text"
          placeholder="Search books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <div className="add-book-form">
          <input
            type="text"
            placeholder="Add new book"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button onClick={addBook}>Add</button>
        </div>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="book-item">
              <span>
                <strong>{book.title}</strong>
              </span>
              <button
                className="remove-btn"
                onClick={() => removeBook(book.id)}
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <div className="no-books">No books found</div>
        )}
      </div>
    </div>
  );
}
