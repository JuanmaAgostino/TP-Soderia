import { useNavigate, Link } from 'react-router-dom';
import { Button, Card, Container } from 'react-bootstrap';
import { VERVENTAS, ACTUALIZARPRODUCTOS } from '../routes/rutas';
import '../styles/LoginStyle.css';

const MainAdmin = () => {

    return (
        
        <Container className="login-container d-flex justify-content-center align-items-center">
            <Card className="login-card shadow">
                <Card.Body>

                    <div className="d-grid gap-2 mt-4">
                        <Link to={VERVENTAS}>ver ventas</Link>
                    </div>

                    
                    <div>
                        <Link to={ACTUALIZARPRODUCTOS}>actualizar productos</Link>
                    </div>

                </Card.Body>
            </Card>
        </Container>
    );
};

export default MainAdmin;