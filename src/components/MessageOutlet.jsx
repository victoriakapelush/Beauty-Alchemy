import React from 'react';
import { Outlet } from 'react-router-dom';

const MessageOutlet = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MessageOutlet;