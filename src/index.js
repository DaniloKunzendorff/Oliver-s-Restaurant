import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/home/index.js';
import Lista from './pages/listaReserva/index.js';
import Reserve from './pages/reservaCliente/index.js';
import Login from './pages/login/index.js';
import Menu from './pages/tabelaADM/index.js';
import Nova from './pages/novaReserva/index.js';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/listaReserva/' element={<Lista />} />
        <Route path='/reservaCliente/' element={<Reserve />} />
        <Route path='/login/' element={<Login />} />
        <Route path='/tabelaADM/' element={<Menu />} />
        <Route path='/novaReserva/' element={<Nova />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
