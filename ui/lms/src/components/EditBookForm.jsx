import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditBookForm({ book, onCancelClick }) {
  const [formData, setFormData] = useState({
    name: '',
    isbn: '',
    author: '',
    description: ''
  });

  useEffect(() => {
    if (book) {
      setFormData(book);
    }
  }, [book]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/api/books/${book.id}`, formData)
      .then(response => {
        console.log('Book updated', response.data);
        onCancelClick(); // Optionally, navigate back to the book list or show a success message
      })
      .catch(error => console.error('Error updating book:', error));
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <label>Name: <input type="text" name="name" value={formData.name} onChange={handleChange} /></label>
      <label>ISBN: <input type="text" name="isbn" value={formData.isbn} onChange={handleChange} /></label>
      <label>Author: <input type="text" name="author" value={formData.author} onChange={handleChange} /></label>
      <label>Description: <textarea name="description" value={formData.description} onChange={handleChange} /></label>
      <button type="submit">Update</button>
      <button type="button" onClick={onCancelClick}>Cancel</button>
    </form>
  );
}

export default EditBookForm;
