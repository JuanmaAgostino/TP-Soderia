import React, { useState } from 'react';
import { CrudProductos } from '../hooks/CrudProductos';
import { producto } from '../routes/rutas';

const MainActualizarProducto = () => {
  const {
    productos,
    cargando,
    agregarProducto,
    actualizarProducto,
    eliminarProducto,
  } = CrudProductos(producto);

  const [nuevo, setNuevo] = useState({ nombre: '', precio: '', stock: 0 });
  const [editandoId, setEditandoId] = useState(null);
  const [editado, setEditado] = useState({ nombre: '', precio: '', stock: 0 });

  const handleAgregar = () => {
    if (nuevo.nombre && nuevo.precio !== '') {
      agregarProducto({
        ...nuevo,
        precio: parseFloat(nuevo.precio),
        stock: parseInt(nuevo.stock),
      });
      setNuevo({ nombre: '', precio: '', stock: 0 });
    }
  };

  const comenzarEdicion = (producto) => {
    setEditandoId(producto.id);
    setEditado({
      nombre: producto.nombre,
      precio: producto.precio,
      stock: producto.stock,
    });
  };

  const guardarCambios = (id) => {
    actualizarProducto(id, {
      nombre: editado.nombre,
      precio: parseFloat(editado.precio),
      stock: parseInt(editado.stock),
    });
    setEditandoId(null);
  };

  if (cargando) return <p>Cargando productos...</p>;

  return (
    <div>
      <h2>Administrar Productos</h2>

      <div style={{ marginBottom: '20px' }}>
        <input
          placeholder="Nombre"
          value={nuevo.nombre}
          onChange={(e) => setNuevo({ ...nuevo, nombre: e.target.value })}
        />
        <input
          placeholder="Precio"
          type="number"
          value={nuevo.precio}
          onChange={(e) => setNuevo({ ...nuevo, precio: e.target.value })}
        />
        <input
          placeholder="Stock"
          type="number"
          value={nuevo.stock}
          onChange={(e) => setNuevo({ ...nuevo, stock: e.target.value })}
        />
        <button onClick={handleAgregar}>Agregar</button>
      </div>

      <ul>
        {productos.map((p) => (
          <li key={p.id} style={{ marginBottom: '10px' }}>
            {editandoId === p.id ? (
              <>
                <input
                  value={editado.nombre}
                  onChange={(e) =>
                    setEditado({ ...editado, nombre: e.target.value })
                  }
                />
                <input
                  type="number"
                  value={editado.precio}
                  onChange={(e) =>
                    setEditado({ ...editado, precio: e.target.value })
                  }
                />
                <input
                  type="number"
                  value={editado.stock}
                  onChange={(e) =>
                    setEditado({ ...editado, stock: e.target.value })
                  }
                />
                <button onClick={() => guardarCambios(p.id)}>Guardar</button>
                <button onClick={() => setEditandoId(null)}>Cancelar</button>
              </>
            ) : (
              <>
                <strong>{p.nombre}</strong> - ${p.precio} - Stock: {p.stock}
                <button onClick={() => comenzarEdicion(p)}>Editar</button>
                <button onClick={() => eliminarProducto(p.id)}>Eliminar</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainActualizarProducto;
