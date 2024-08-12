import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, set, remove } from 'firebase/database';
import { app } from '../firebase-config';
import Popup from './Popup'; // Import the Popup component
import './IssuedBooksList.css';

const db = getDatabase(app);

export function IssuedBooksList() {
  const [users, setUsers] = useState([]);
  const [books, setBooks] = useState([]);
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
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

    fetchUsers();
    fetchBooks();
  }, []);

  const handleReturnBook = (userID, bookID) => {
    const issuedBooksRef = ref(db, `users/${userID}/issuedBooks/${bookID}`);
    const bookRef = ref(db, `books/${bookID}`);

    // Remove the book from the user's issued books
    remove(issuedBooksRef).then(() => {
      // Update book availability
      const bookToUpdate = books.find(book => book.ID === bookID);
      if (bookToUpdate) {
        return set(bookRef, {
          ...bookToUpdate,
          available: true, // Mark the book as available
        }).then(() => {
          showPopupMessage('Book returned successfully! 🎉');
        }).catch((error) => {
          console.error("Error updating book availability: ", error);
          showPopupMessage('Error updating book availability.');
        });
      } else {
        console.error("Book not found for update.");
        showPopupMessage('Book not found for update.');
      }
    }).catch((error) => {
      console.error("Error returning book: ", error);
      showPopupMessage('Error returning book.');
    });
  };

  const handleUserDeletion = (userID) => {
    const issuedBooksRef = ref(db, `users/${userID}/issuedBooks`);

    // Fetch issued books for the user
    onValue(issuedBooksRef, (snapshot) => {
      const issuedBooks = snapshot.val();
      if (issuedBooks) {
        // Collect promises for updating book availability
        const bookUpdatePromises = Object.keys(issuedBooks).map(bookID => {
          const bookRef = ref(db, `books/${bookID}`);
          const bookToUpdate = books.find(book => book.ID === bookID);

          if (bookToUpdate) {
            // Mark each book as available
            return set(bookRef, { ...bookToUpdate, available: true });
          } else {
            return Promise.resolve(); // Resolve immediately if book is not found
          }
        });

        // Process all promises
        Promise.all(bookUpdatePromises)
          .then(() => {
            // Proceed with deleting the user after updating books
            const userRef = ref(db, `users/${userID}`);
            return remove(userRef);
          })
          .then(() => {
            showPopupMessage('User deleted successfully! 🎉');
          })
          .catch((error) => {
            console.error("Error deleting user: ", error);
            showPopupMessage('Error deleting user.');
          });
      } else {
        // If no issued books, just delete the user
        const userRef = ref(db, `users/${userID}`);
        remove(userRef)
          .then(() => {
            showPopupMessage('User deleted successfully! 🎉');
          })
          .catch((error) => {
            console.error("Error deleting user: ", error);
            showPopupMessage('Error deleting user.');
          });
      }
    });
  };

  const showPopupMessage = (message) => {
    setPopupMessage(message);
    setShowPopup(true);
  };

  const hidePopup = () => {
    setShowPopup(false);
    setPopupMessage('');
  };

  return (
    <div className="issued-books-section">
      <header className="app-header">
        <h1>Issued Books</h1>
      </header>
      <div className="card">
        <h2>Issued Books Management</h2>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Book</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user =>
                user.issuedBooks && Object.keys(user.issuedBooks).map(bookID => {
                  const book = books.find(b => b.ID === bookID);
                  return book ? (
                    <tr key={bookID}>
                      <td>{user.name}</td>
                      <td>{book.title}</td>
                      <td>
                        <button onClick={() => handleReturnBook(user.ID, bookID)} className="btn-primary">Return Book</button>
                      </td>
                    </tr>
                  ) : null;
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
      {showPopup && <Popup message={popupMessage} onClose={hidePopup} />}
    </div>
  );
}

export default IssuedBooksList;
