import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import RoomProvider from './context/RoomContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RoomProvider>
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  </RoomProvider>
);
