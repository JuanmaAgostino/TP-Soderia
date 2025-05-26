import axios from 'axios';
import { useState, useEffect} from 'react';


export const prueba = (endpoint) => {
    const [datos, setDatos] = useState([]);

    const GetUsuarios = async () => {
        try {
            const respuesta = await axios.get('http://localhost:3001/'+endpoint);
            setDatos(respuesta.data);
            console.log('Respuesta de la API: ', respuesta.data);
        } catch (error) {
            console.log('Error al obtener los usuarios: ', error);
        }
    };

    useEffect(() => {
        GetUsuarios();
    }, []);

    return { datos };
}