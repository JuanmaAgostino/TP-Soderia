import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AGRADECIMIENTO, LOGIN, PRINCIPALADMIN, PRINCIPALCLIENTE, VERVENTAS, ACTUALIZARPRODUCTOS } from './routes/rutas';
import LoginPage from './pages/LoginPage';
import PaginaPrincipalAdmin from './pages/PaginaPrincipalAdmin'
import PaginaPrincipalCliente from './pages/PaginaPrincipalCliente'
import Agradecimiento from './pages/Agradecimiento'
import VerVentas from './pages/VerVentas'
import ActualizarProductos from './pages/ActualizarProductos'

function App() {
  return (
    <div>
     
        <Routes>
          <Route path={PRINCIPALCLIENTE} element={<PaginaPrincipalCliente />} />
          <Route path={PRINCIPALADMIN} element={<PaginaPrincipalAdmin />} />
          <Route path={AGRADECIMIENTO} element={<Agradecimiento />} />
          <Route path={VERVENTAS} element={<VerVentas />} />
          <Route path={ACTUALIZARPRODUCTOS} element={<ActualizarProductos />} />
          <Route path={LOGIN} element={<LoginPage />} />
        </Routes>


    </div>

  );
}

export default App;