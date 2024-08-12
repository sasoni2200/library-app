
import { ref, set, onValue, remove } from 'firebase/database';
import { getDatabase } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { app } from '../firebase-config';
import Popup from './Popup'; // Ensure Popup component is in the correct path
import "./BookList.css";

const db = getDatabase(app);

export function BookList() {
  const [data, setData] = useState([]);
  const [editingRow, setEditingRow] = useState(null);
  const [currentEdit, setCurrentEdit] = useState({ ID: '', title: '', author: '' });
  const [newEntry, setNewEntry] = useState({ ID: '', title: '', author: '' });
  const [originalID, setOriginalID] = useState(null);
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  // Function to show popup message
  const showPopupMessage = (message) => {
    setPopupMessage(message);
    setShowPopup(true);
  };

  // Function to hide popup
  const hidePopup = () => {
    setShowPopup(false);
    setPopupMessage('');
  };

  // Function to add new book to the database
  const addData = (e) => {
    e.preventDefault();
    if (newEntry.ID && newEntry.title && newEntry.author) {
      const bookRef = ref(db, `books/${newEntry.ID}`);
      set(bookRef, {
        ID: newEntry.ID,
        title: newEntry.title,
        author: newEntry.author,
      }).then(() => {
        setNewEntry({ ID: '', title: '', author: '' });
        fetchData(); // Refresh data after adding
        showPopupMessage('Book added successfully! 🎉');
      }).catch(error => {
        console.error("Error adding data: ", error);
        showPopupMessage('Error adding book.');
      });
    }
  };

  // Function to update existing book data in the database
  const updateData = () => {
    if (currentEdit.ID && currentEdit.title && currentEdit.author) {
      if (currentEdit.ID !== originalID) {
        // If ID has changed, delete the old entry and create a new one
        deleteData(originalID).then(() => {
          createData(currentEdit.ID, currentEdit.title, currentEdit.author);
        }).catch(error => {
          console.error("Error deleting old data: ", error);
          showPopupMessage('Error updating book.');
        });
      } else {
        // If ID has not changed, just update the existing entry
        createData(currentEdit.ID, currentEdit.title, currentEdit.author);
      }
    } else {
      console.error("Invalid data for update");
      showPopupMessage('Invalid data for update.');
    }
  };

  // Function to create or update book data
  const createData = (ID, title, author) => {
    const bookRef = ref(db, `books/${ID}`);
    set(bookRef, {
      ID,
      title,
      author,
    }).then(() => {
      setEditingRow(null);
      setCurrentEdit({ ID: '', title: '', author: '' });
      setOriginalID(null);
      fetchData(); // Refresh data after updating
      showPopupMessage('Book updated successfully! 🎉');
    }).catch(error => {
      console.error("Error creating/updating data: ", error);
      showPopupMessage('Error updating book.');
    });
  };

  // Function to delete book data from the database
  const deleteData = (ID) => {
    const bookRef = ref(db, `books/${ID}`);
    return remove(bookRef).then(() => {
      fetchData(); // Refresh data after deletion
      showPopupMessage('Book deleted successfully! 🎉');
    }).catch(error => {
      console.error("Error deleting data: ", error);
      showPopupMessage('Error deleting book.');
    });
  };

  // Function to read book data from the database
  const fetchData = () => {
    const dataRef = ref(db, 'books/');
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const dataArray = Object.keys(data).map(key => ({
          ...data[key],
          key
        }));
        setData(dataArray);
      } else {
        setData([]); // Ensure data is cleared if no data exists
      }
    });
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Start editing a row
  const startEditing = (book) => {
    setEditingRow(book.ID);
    setCurrentEdit({ ...book });
    setOriginalID(book.ID);
  };

  // Cancel editing a row
  const cancelEditing = () => {
    setEditingRow(null);
    setCurrentEdit({ ID: '', title: '', author: '' });
    setOriginalID(null);
  };

  // Handle change in input fields for editing
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setCurrentEdit(prev => ({ ...prev, [name]: value }));
  };

  // Handle change in input fields for adding new book
  const handleNewEntryChange = (e) => {
    const { name, value } = e.target;
    setNewEntry(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="book-list-container">
      <header className="app-header">
        <h1>Book Management</h1>
      </header>
      <main className="main-content">
        <section className="add-book-section">
          <div className="card">
            <h2>Add New Book</h2>
            <form onSubmit={addData}>
              <div className="form-fields">
                <input
                  type="text"
                  placeholder="ID"
                  name="ID"
                  value={newEntry.ID}
                  onChange={handleNewEntryChange}
                  required
                  disabled={editingRow !== null}
                />
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  value={newEntry.title}
                  onChange={handleNewEntryChange}
                  required
                />
                <input
                  type="text"
                  placeholder="Author"
                  name="author"
                  value={newEntry.author}
                  onChange={handleNewEntryChange}
                  required
                />
                <button type="submit" className="btn btn-primary">Add Book</button>
              </div>
            </form>
          </div>
        </section>
        <section className="book-list-section">
          <div className="card">
            <h2>Book List</h2>
            <table className="book-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map(book => (
                  <tr key={book.key}>
                    <td>
                      {editingRow === book.ID ? (
                        <input
                          type="text"
                          name="ID"
                          value={currentEdit.ID}
                          onChange={handleEditChange}
                        />
                      ) : (
                        book.ID
                      )}
                    </td>
                    <td>
                      {editingRow === book.ID ? (
                        <input
                          type="text"
                          name="title"
                          value={currentEdit.title}
                          onChange={handleEditChange}
                        />
                      ) : (
                        book.title
                      )}
                    </td>
                    <td>
                      {editingRow === book.ID ? (
                        <input
                          type="text"
                          name="author"
                          value={currentEdit.author}
                          onChange={handleEditChange}
                        />
                      ) : (
                        book.author
                      )}
                    </td>
                    <td className='booklistItemEdit'>
                      {editingRow === book.ID ? (
                        <>
                          <button onClick={updateData} className="btn btn-success">Save</button>
                          <button onClick={cancelEditing} className="btn btn-secondary">Cancel</button>
                        </>
                      ) : (
                        <>
                          <button onClick={() => startEditing(book)} className="btn btn-primary">Edit</button>
                          <button onClick={() => deleteData(book.ID)} className="btn btn-danger">Delete</button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
      {showPopup && <Popup message={popupMessage} onClose={hidePopup} />}
    </div>
  );
}
export default BookList;
