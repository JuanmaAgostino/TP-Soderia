import React from 'react';
import '../styles/LoginStyle.css';
import { VerVentas } from '../hooks/VerVentas';
import { ventasPoint, usuario } from '../routes/rutas';
import { prueba } from '../hooks/prueba';

const MainVentas = () => {
  const { datosVenta } = VerVentas(ventasPoint);
  const { datos } = prueba(usuario);

  return (
    <div>
      {datosVenta && datosVenta.length > 0 ? (
        datosVenta.map((venta) => {
          const usuarioEncontrado = datos.find((u) => u.id === venta.idUsuario);
          return (
            <div key={venta.id} style={{ border: '1px solid gray', marginBottom: '10px', padding: '10px' }}>
              <h3>{usuarioEncontrado ? usuarioEncontrado.nombre : 'Usuario desconocido'}</h3>
              <p>Precio: ${venta.total}</p>
            </div>
          );
        })
      ) : (
        <p>No hay ventas para mostrar</p>
      )}
    </div>
  );
};

export default MainVentas;
