import React from 'react';
import { Outlet } from 'react-router-dom';

const PublicRoutes = () => {
  return (
    <div>
      <Outlet />
      {/* No Navbar or IssueBook here */}
    </div>
  );
};

export default PublicRoutes;
