// components/AddBookForm.js
import React, { useState } from 'react';
import axios from 'axios';

const AddBookForm = ({ onCancelClick }) => {
  const [formData, setFormData] = useState({
    name: '',
    isbn: '',
    author: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/books', formData)
      .then(response => {
        console.log('Book added successfully:', response.data);
        // Reset form data here if needed
        onCancelClick();
      })
      .catch(error => {
        console.error('Error adding book: ', error);
      });
  };

  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          ISBN:
          <input type="text" name="isbn" value={formData.isbn} onChange={handleChange} required />
        </label>
        <label>
          Author:
          <input type="text" name="author" value={formData.author} onChange={handleChange} required />
        </label>
        <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleChange} required />
        </label>
        <button type="submit">Add</button>
        <button type="button" onClick={onCancelClick}>Cancel</button>
      </form>
    </div>
  );
};

export default AddBookForm;
