import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database'; // Import the database functions

const firebaseConfig = {
  apiKey: "AIzaSyAI-7IUqRvvujW1iTBMMSmhUs512yJOrQ4",
  authDomain: "app-efd1e.firebaseapp.com",
  projectId: "app-efd1e",
  storageBucket: "app-efd1e.appspot.com",
  messagingSenderId: "421651516908",
  appId: "1:421651516908:web:23dd5b38a1da02028844c9",
  databaseURL: "https://app-efd1e-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { app, auth, database }; // Export all necessary components
