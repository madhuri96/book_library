import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BookListing() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
    <div>
      <h2>Book Listing</h2>
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          <p>Author: {book.userId}</p>
          <p>Price: $10</p>
          <Link to={`/books/${book.id}`}>View Details</Link>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default BookListing;
