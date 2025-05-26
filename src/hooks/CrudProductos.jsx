import { useEffect, useState } from 'react';
import axios from 'axios';

export const CrudProductos = (endpoint) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const obtenerProductos = async () => {
    try {
      const respuesta = await axios.get(`http://localhost:3001/${endpoint}`);
      setProductos(respuesta.data);
    } catch (error) {
      console.error('Error al obtener productos:', error);
    } finally {
      setCargando(false);
    }
  };

  const agregarProducto = async (nuevoProducto) => {
    try {
      const respuesta = await axios.post(`http://localhost:3001/${endpoint}`, nuevoProducto);
      setProductos([...productos, respuesta.data]);
    } catch (error) {
      console.error('Error al agregar producto:', error);
    }
  };

  const actualizarProducto = async (id, datosActualizados) => {
    try {
      await axios.patch(`http://localhost:3001/${endpoint}/${id}`, datosActualizados);
      obtenerProductos(); // o puedes actualizar localmente si prefieres
    } catch (error) {
      console.error('Error al actualizar producto:', error);
    }
  };

  const eliminarProducto = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/${endpoint}/${id}`);
      setProductos(productos.filter(p => p.id !== id));
    } catch (error) {
      console.error('Error al eliminar producto:', error);
    }
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  return {
    productos,
    cargando,
    agregarProducto,
    actualizarProducto,
    eliminarProducto
  };
};