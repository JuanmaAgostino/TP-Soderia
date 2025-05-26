import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PRINCIPALCLIENTE } from '../routes/rutas';

const MainAgradecimiento = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(PRINCIPALCLIENTE);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h2>¡Gracias por su compra!</h2>
      <p>Será redirigido en unos segundos...</p>
    </div>
  );
};

export default MainAgradecimiento;