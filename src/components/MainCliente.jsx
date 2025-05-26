import { useNavigate } from 'react-router-dom';
import { ManejoProductos } from '../hooks/ManejoProductos';
import { AGRADECIMIENTO, producto } from '../routes/rutas';

const PaginaCliente = () => {
    const navigate = useNavigate();
    const { productos, cantidades, cambiarCantidad, realizarCompra, cargando } = ManejoProductos(producto);

    const handleComprar = async () => {
        const resultado = await realizarCompra();
        if (resultado.exito) {
            navigate(AGRADECIMIENTO);
        } else {
            alert(resultado.mensaje);
        }
    };

    if (cargando) return <p>Cargando productos...</p>;

    return (
       
            <div>

                <h2>Lista de productos</h2>
              
                    <div>
                            {productos.map((producto) => (
                                <div key={producto.id} style={{ border: '1px solid gray', marginBottom: '10px', padding: '10px' }}>

                                    <h3>{producto.nombre}</h3>
                                    <p>Precio: ${producto.precio}</p>
                                    <p>Stock disponible: {producto.stock}</p>
                                    <input
                                        type="number"
                                        min="0"
                                        max={producto.stock}
                                        value={cantidades[producto.id] || ''}
                                        onChange={(e) => cambiarCantidad(producto.id, e.target.value)}
                                        disabled={producto.stock === 0}
                                    />
                                </div>
                            ))}
                    </div>

                <button onClick={handleComprar}>Comprar</button>
            </div>
           
    );
};

export default PaginaCliente;
