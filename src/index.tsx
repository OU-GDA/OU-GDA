import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, HashRouter, Routes } from 'react-router-dom';


/* PAGE IMPORTS START */
import App from './pages/App';
import Test from './pages/Test';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
    <Routes>
      <Route path='/secret' element={<Test />} />
      <Route path='/' element={<App />} />
    </Routes>
    </HashRouter>
  </React.StrictMode>
);
