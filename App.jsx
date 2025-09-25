import React, { useState } from 'react';

const initialBooks = [
  { id: 1, title: "1984", author: "George Orwell" },
  { id: 2, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee" }
];

const LibraryManagement = () => {
  const [books, setBooks] = useState(initialBooks);
  const [search, setSearch] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  // Search filtering
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase())
  );

  // Add a new book
  const handleAddBook = () => {
    if (!title.trim() || !author.trim()) return;
    setBooks([
      ...books,
      { id: Date.now(), title: title.trim(), author: author.trim() }
    ]);
    setTitle('');
    setAuthor('');
  };

  // Remove a book by id
  const handleRemoveBook = id => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <div style={{
      border: '2px solid #444',
      padding: '24px',
      margin: '24px auto',
      maxWidth: '700px',
      borderRadius: '6px',
      background: '#f9f9f9'
    }}>
      <h2 style={{ fontWeight: 'bold', fontSize: '2rem', marginBottom: '12px', color: '#333' }}>Library Management</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by title or author"
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{
          width: '100%',
          padding: '12px',
          marginBottom: '16px',
          border: '1px solid #bbb',
          borderRadius: '3px',
          fontSize: '1rem',
          boxSizing: 'border-box'
        }}
      />

      {/* Add Book Form */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="New book title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          style={{
            flex: 1,
            padding: '12px',
            border: '1px solid #bbb',
            borderRadius: '3px',
            fontSize: '1rem',
            boxSizing: 'border-box'
          }}
        />
        <input
          type="text"
          placeholder="New book author"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          style={{
            flex: 1,
            padding: '12px',
            border: '1px solid #bbb',
            borderRadius: '3px',
            fontSize: '1rem',
            boxSizing: 'border-box'
          }}
        />
        <button
          type="button"
          onClick={handleAddBook}
          style={{
            padding: '12px 24px',
            border: '1px solid #888',
            background: '#4CAF50',  // Green for the Add Book button
            color: '#fff',  // White text for better contrast
            borderRadius: '3px',
            cursor: 'pointer',
            fontSize: '1rem',
            boxSizing: 'border-box',
            transition: 'background-color 0.3s ease'
          }}
          onMouseOver={e => e.target.style.backgroundColor = '#45a049'}  // Darken on hover
          onMouseOut={e => e.target.style.backgroundColor = '#4CAF50'}  // Reset on hover out
        >
          Add Book
        </button>
      </div>

      {/* Book List */}
      <div>
        {filteredBooks.map(book => (
          <div key={book.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #e1e1e1',
              padding: '12px',
              borderRadius: '5px',
              marginBottom: '12px',
              background: '#fff',
              gap: '12px'
            }}>
            <span style={{ flex: 1, fontSize: '1.1rem', color: '#333' }}>
              <strong>{book.title}</strong> by {book.author}
            </span>
            <button
              onClick={() => handleRemoveBook(book.id)}
              style={{
                border: '1px solid #999',
                borderRadius: '3px',
                padding: '8px 18px',
                background: '#f44336',  // Red for the Remove button
                color: '#fff',  // White text for better contrast
                cursor: 'pointer',
                fontSize: '1rem',
                boxSizing: 'border-box',
                transition: 'background-color 0.3s ease'
              }}
              onMouseOver={e => e.target.style.backgroundColor = '#da190b'}  // Darken on hover
              onMouseOut={e => e.target.style.backgroundColor = '#f44336'}  // Reset on hover out
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LibraryManagement;
