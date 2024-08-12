import React, { useEffect, useState } from 'react';
import { ref, set, get, remove } from 'firebase/database';
import { database as db } from '../firebase-config'; // Adjust import to use the correct named export
import Popup from './Popup';
import "./UserList.css";

export function UserList() {
  const [data, setData] = useState([]);
  const [editingRow, setEditingRow] = useState(null);
  const [currentEdit, setCurrentEdit] = useState({ ID: '', name: '', age: '' });
  const [newEntry, setNewEntry] = useState({ ID: '', name: '', age: '' });
  const [originalID, setOriginalID] = useState(null);
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

  const addData = async (e) => {
    e.preventDefault();
    if (newEntry.ID && newEntry.name && newEntry.age) {
      const userRef = ref(db, `users/${newEntry.ID}`);
      try {
        await set(userRef, {
          ID: newEntry.ID,
          name: newEntry.name,
          age: newEntry.age,
        });
        setNewEntry({ ID: '', name: '', age: '' });
        fetchData();
        showPopupMessage('User added successfully! 🎉');
      } catch (error) {
        console.error("Error adding data: ", error);
        showPopupMessage('Error adding user.');
      }
    }
  };

  const updateData = async () => {
    if (currentEdit.ID && currentEdit.name && currentEdit.age) {
      if (currentEdit.ID !== originalID) {
        try {
          await deleteData(originalID);
          await createData(currentEdit.ID, currentEdit.name, currentEdit.age);
        } catch (error) {
          console.error("Error updating data: ", error);
          showPopupMessage('Error updating user.');
        }
      } else {
        await createData(currentEdit.ID, currentEdit.name, currentEdit.age);
      }
    } else {
      console.error("Invalid data for update");
    }
  };

  const createData = async (ID, name, age) => {
    const userRef = ref(db, `users/${ID}`);
    try {
      await set(userRef, { ID, name, age });
      setEditingRow(null);
      setCurrentEdit({ ID: '', name: '', age: '' });
      setOriginalID(null);
      fetchData();
      showPopupMessage('User updated successfully! 🎉');
    } catch (error) {
      console.error("Error creating/updating data: ", error);
      showPopupMessage('Error updating user.');
    }
  };

  const deleteData = async (ID) => {
    const userRef = ref(db, `users/${ID}`);
    const issuedBooksRef = ref(db, `users/${ID}/issuedBooks`);

    try {
      const snapshot = await get(issuedBooksRef);
      const issuedBooks = snapshot.val();

      if (issuedBooks) {
        const bookUpdates = Object.keys(issuedBooks).map(async (bookID) => {
          const bookRef = ref(db, `books/${bookID}`);
          const bookSnapshot = await get(bookRef);
          const bookData = bookSnapshot.val();

          if (bookData) {
            await set(bookRef, { ...bookData, available: true });
          }
        });

        await Promise.all(bookUpdates);
      }

      await remove(userRef);
      fetchData();
      showPopupMessage('User deleted successfully! 🎉');
    } catch (error) {
      console.error("Error deleting user or updating book availability: ", error);
      showPopupMessage('Error deleting user.');
    }
  };

  const fetchData = async () => {
    const dataRef = ref(db, 'users/');
    try {
      const snapshot = await get(dataRef);
      const data = snapshot.val();
      if (data) {
        const dataArray = Object.keys(data).map(key => ({ ...data[key], key }));
        setData(dataArray);
      } else {
        setData([]);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
      showPopupMessage('Error fetching user data.');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const startEditing = (user) => {
    setEditingRow(user.ID);
    setCurrentEdit({ ...user });
    setOriginalID(user.ID);
  };

  const cancelEditing = () => {
    setEditingRow(null);
    setCurrentEdit({ ID: '', name: '', age: '' });
    setOriginalID(null);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setCurrentEdit(prev => ({ ...prev, [name]: value }));
  };

  const handleNewEntryChange = (e) => {
    const { name, value } = e.target;
    setNewEntry(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="user-list-container">
      <header className="app-header">
        <h1>User Management</h1>
      </header>
      <main className="main-content">
        <section className="add-user-section">
          <div className="card">
            <h2>Add New User</h2>
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
                  placeholder="Name"
                  name="name"
                  value={newEntry.name}
                  onChange={handleNewEntryChange}
                  required
                />
                <input
                  type="number"
                  placeholder="Age"
                  name="age"
                  value={newEntry.age}
                  onChange={handleNewEntryChange}
                  required
                />
                <button type="submit" className="btn btn-primary">Add User</button>
              </div>
            </form>
          </div>
        </section>
        <section className="user-list-section">
          <div className="card">
            <h2>User List</h2>
            <table className="user-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map(user => (
                  <tr key={user.key}>
                    <td>
                      {editingRow === user.ID ? (
                        <input
                          type="text"
                          name="ID"
                          value={currentEdit.ID}
                          onChange={handleEditChange}
                        />
                      ) : (
                        user.ID
                      )}
                    </td>
                    <td>
                      {editingRow === user.ID ? (
                        <input
                          type="text"
                          name="name"
                          value={currentEdit.name}
                          onChange={handleEditChange}
                        />
                      ) : (
                        user.name
                      )}
                    </td>
                    <td>
                      {editingRow === user.ID ? (
                        <input
                          type="number"
                          name="age"
                          value={currentEdit.age}
                          onChange={handleEditChange}
                        />
                      ) : (
                        user.age
                      )}
                    </td>
                    <td className='userItemEdit'>
                      {editingRow === user.ID ? (
                        <>
                          <button onClick={updateData} className="btn btn-success">Save</button>
                          <button onClick={cancelEditing} className="btn btn-secondary">Cancel</button>
                        </>
                      ) : (
                        <>
                          <button onClick={() => startEditing(user)} className="btn btn-primary">Edit</button>
                          <button onClick={() => deleteData(user.ID)} className="btn btn-danger">Delete</button>
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

export default UserList;
