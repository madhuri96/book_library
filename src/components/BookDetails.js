import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetchBookDetails();
  }, []);

  const fetchBookDetails = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await response.json();
      setBook(data);
    } catch (error) {
      console.error('Error fetching book details:', error);
    }
  };

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Book Details</h2>
      <h3>{book.title}</h3>
      <p>Author ID: {book.userId}</p>
      <p>Price: $10</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default BookDetails;
