import React from 'react';
import { Outlet } from 'react-router-dom';

const MakeupOutlet = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MakeupOutlet;