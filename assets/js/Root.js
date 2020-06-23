import React from 'react';
import Chat from './Chat';

const root = () => {
  return (
    <div className="main-window">
      <Chat username="user one"/>
      <Chat username="user two"/>
    </div>
  );
}

export default root;