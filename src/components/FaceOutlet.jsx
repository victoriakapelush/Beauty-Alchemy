import React from 'react';
import { Outlet } from 'react-router-dom';

const FaceOutlet = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default FaceOutlet;