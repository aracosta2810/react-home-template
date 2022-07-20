import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Page404 from './Components/Page404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='404' element={<Page404 />}/>
        <Route path='*' element={<App />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);