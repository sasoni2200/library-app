import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import { app, auth } from '../firebase-config';
import Popup from './Popup'; // Import the Popup component
import './IssueBook.css';

const db = getDatabase(app);

export function IssueBook() {
  const [users, setUsers] = useState([]);
  const [books, setBooks] = useState([]);
  const [issuingBook, setIssuingBook] = useState({ userID: '', bookID: '' });
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const showPopupMessage = (message) => {
    setPopupMessage(message);
    setShowPopup(true);
  };

  const hidePopup = () => {
    setShowPopup(false);
    setPopupMessage('');
  };

  const fetchUsers = () => {
    const usersRef = ref(db, 'users/');
    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const usersArray = Object.keys(data).map(key => ({ ...data[key], ID: key }));
        setUsers(usersArray);
      } else {
        setUsers([]);
      }
    });
  };

  const fetchBooks = () => {
    const booksRef = ref(db, 'books/');
    onValue(booksRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const booksArray = Object.keys(data).map(key => ({
          ...data[key],
          ID: key,
          available: data[key].available ?? true // Default to true if `available` is not present
        }));
        setBooks(booksArray);
      } else {
        setBooks([]);
      }
    });
  };

  useEffect(() => {
    fetchUsers();
    fetchBooks();
  }, []);

  const handleIssueBook = (e) => {
    e.preventDefault();

    const { userID, bookID } = issuingBook;

    if (!userID || !bookID) {
      showPopupMessage("Please select both a user and a book.");
      return;
    }

    const issuedBooksRef = ref(db, `users/${userID}/issuedBooks/${bookID}`);
    const bookRef = ref(db, `books/${bookID}`);

    // Update issued books for the user
    set(issuedBooksRef, {
      userID,
      bookID,
      issueDate: new Date().toISOString(),
    }).then(() => {
      // Update book availability
      const bookToUpdate = books.find(book => book.ID === bookID);
      if (bookToUpdate) {
        return set(bookRef, {
          ...bookToUpdate,
          available: false, // Mark the book as unavailable
        });
      } else {
        throw new Error("Book not found for update.");
      }
    }).then(() => {
      showPopupMessage("Book issued successfully!");
      setIssuingBook({ userID: '', bookID: '' });
      fetchBooks(); // Refresh books list to reflect the current availability status
    }).catch((error) => {
      console.error("Error issuing book: ", error);
      showPopupMessage("Error issuing book.");
    });
  };

  return (
    <div className="containerForm">
      <div className="issue-book-section">
        <header className="app-header">
          <h1>Issue Book</h1>
        </header>
        <div className="card">
          <h2>Book Issue Panel</h2>
          <form onSubmit={handleIssueBook}>
            <select
              value={issuingBook.userID}
              onChange={(e) => setIssuingBook({ ...issuingBook, userID: e.target.value })}
              required
            >
              <option value="">Select User</option>
              {users.map(user => (
                <option key={user.ID} value={user.ID}>{user.name}</option>
              ))}
            </select>
            <select
              value={issuingBook.bookID}
              onChange={(e) => setIssuingBook({ ...issuingBook, bookID: e.target.value })}
              required
            >
              <option value="">Select Book</option>
              {books.filter(book => book.available).map(book => (
                <option key={book.ID} value={book.ID}>{book.title}</option>
              ))}
            </select>
            <button type="submit" className="btn-primary">Issue Book</button>
          </form>
        </div>
        {showPopup && <Popup message={popupMessage} onClose={hidePopup} />}
      </div>
    </div>
  );
}

export default IssueBook;
