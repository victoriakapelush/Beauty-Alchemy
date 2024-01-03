import React from 'react';
import { Outlet } from 'react-router-dom';

const HairOutlet = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default HairOutlet;