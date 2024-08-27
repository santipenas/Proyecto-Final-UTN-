import './App.css';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './componentes/layout/Header';
import Nav from './componentes/layout/Nav';
import Footer from './componentes/layout/Footer';

import HomePage from './paginas/HomePage';
import NosotrosPage from './paginas/NosotrosPage';
import ContactoPage from './paginas/ContactoPage';
import GaleriaPage from './paginas/GaleriaPage';
import ServiciosPage from './paginas/ServiciosPage'; 
import NovedadesPage from './paginas/NovedadesPage';



function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/nosotros' element={<NosotrosPage />} />
          <Route path='/contacto' element={<ContactoPage />} />
          <Route path='/galeria' element={<GaleriaPage />} />
          <Route path='/servicios' element={<ServiciosPage />} />
          <Route path='/novedades' element={<NovedadesPage />} />
        </Routes>
      </BrowserRouter>
      
      <Footer />
    </div>
  );
}

export default App;


