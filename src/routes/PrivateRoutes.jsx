import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { auth } from '../firebase-config';

const PrivateRoutes = () => {
  const user = auth.currentUser;
  return user ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoutes;
