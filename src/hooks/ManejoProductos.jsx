import { useEffect, useState } from 'react';
import axios from 'axios';
import { GuardarIdUsuario } from '../context/GuardarIdUsuario';

export const ManejoProductos = (endpoint) => {
  const [productos, setProductos] = useState([]);
  const [cantidades, setCantidades] = useState({});
  const [cargando, setCargando] = useState(true);
  const { idUsuario } = GuardarIdUsuario(); 
  const obtenerProductos = async () => {
    try {
      const respuesta = await axios.get('http://localhost:3001/'+endpoint);
      setProductos(respuesta.data);
    } catch (error) {
      console.error('Error al obtener productos:', error);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  const cambiarCantidad = (id, cantidad) => {
    const cantidadNumerica = parseInt(cantidad) || 0;
    const producto = productos.find(p => p.id === id);

    if (cantidadNumerica <= producto.stock && cantidadNumerica >= 0) {
      setCantidades({ ...cantidades, [id]: cantidadNumerica });
    }
  };

  const realizarCompra = async () => {
    const seleccionados = productos.filter(p => cantidades[p.id] > 0);
    if (seleccionados.length === 0) {
      return { exito: false, mensaje: 'No seleccionaste productos.' };
    }

    const total = seleccionados.reduce((acc, p) => acc + p.precio * cantidades[p.id], 0);

    try {

      for (let producto of seleccionados) {
        const nuevoStock = producto.stock - cantidades[producto.id];
        await axios.patch(`http://localhost:3001/productos/${producto.id}`, {
          stock: nuevoStock
        });
        
      }
      await axios.post('http://localhost:3001/ventas', {
        idUsuario,
        total
      });


      await obtenerProductos();
      setCantidades({});
      return { exito: true, mensaje: 'Compra realizada con éxito.' };
    } catch (error) {
      console.error('Error al actualizar el stock:', error);
      return { exito: false, mensaje: 'Error al realizar la compra.' };
    }
  };

  return {
    productos,
    cantidades,
    cambiarCantidad,
    realizarCompra,
    cargando
  };
};
