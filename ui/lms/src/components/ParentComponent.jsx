import React, { useState } from 'react';
import BookList from './BookList';
import EditBookForm from './EditBookForm';

function ParentComponent() {
  const [currentBook, setCurrentBook] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = (book) => {
    setCurrentBook(book);
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setCurrentBook(null);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <EditBookForm book={currentBook} onCancelClick={handleCancelClick} />
      ) : (
        <BookList onEditClick={handleEditClick} />
      )}
    </div>
  );
}

export default ParentComponent;
