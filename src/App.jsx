import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext'; // Adjust path if necessary
import IssueBook from './components/IssueBook';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Booklist from './components/Booklist';
import IssuedBookList from './components/IssuedBookList';
import UserList from './components/UserList';
import PublicRoutes from './routes/PublicRoutes';
import PrivateRoutes from './routes/PrivateRoutes';
import Navbar from './components/Navbar'; // Import Navbar

// Layout component for private routes
const PrivateLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

function App() {
  return (
    <AuthContextProvider>
      
      <Router basename="/library-app">
        <Routes>
          {/* Public Routes */}
          
          <Route path="/" element={<PrivateLayout><PublicRoutes /></PrivateLayout>}>
          <Route path="" element={<IssueBook />} />
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
            <Route path="issuebook" element={<IssueBook />} />
          </Route>

          {/* Private Routes with Navbar */}
          <Route path="/dashboard" element={<PrivateLayout><PrivateRoutes /></PrivateLayout>}>
             {/* Adjust this if needed */}
             <Route path="" element={<IssueBook />} />
            <Route path="books" element={<Booklist />} />
            <Route path="issued" element={<IssuedBookList />} />
            <Route path="users" element={<UserList />} />
          </Route>

          {/* Catch-All Route for 404 */}
          <Route path="*" element={<Signin />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
