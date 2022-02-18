import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import CloudPage from './routes/CloudPage'
import ContactPage from './routes/ContactPage'
import RecoveryPage from './routes/RecoveryPage';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/recovery' element={<RecoveryPage />} />
      <Route path='/cloud' element={<CloudPage />} />
      <Route path='/contact' element={<ContactPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


