import React from 'react';
import { Outlet } from 'react-router-dom';

const BodyAndBathOutlet = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default BodyAndBathOutlet;