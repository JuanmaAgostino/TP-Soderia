import axios from 'axios';
import { useState, useEffect} from 'react';

export const VerVentas = (endpoint) => {
    const [datosVenta, setDatosVenta] = useState([]);
    const GetVentas = async () => {
        try {
            const respuesta = await axios.get('http://localhost:3001/'+endpoint);
            setDatosVenta(respuesta.data);
            console.log('Respuesta de la API: ', respuesta.data);
        } catch (error) {
            console.log('Error al obtener los usuarios: ', error);
        }
    };

    useEffect(() => {
        GetVentas();
    }, []);

    return { datosVenta };
}