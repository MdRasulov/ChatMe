import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import { ModalContextProvider } from './context/ModalStateContext.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ModalContextProvider>
          <App />
        </ModalContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
