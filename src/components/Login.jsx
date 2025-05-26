import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap';
import { PRINCIPALADMIN, PRINCIPALCLIENTE, usuario } from '../routes/rutas';
import '../styles/LoginStyle.css';
import { prueba } from '../hooks/prueba';
import { GuardarIdUsuario } from '../context/GuardarIdUsuario';

const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const { datos } = prueba(usuario); 
    const { setIdUsuario } = GuardarIdUsuario();

    const Validacion = () => {
        const encontrado = datos.find(
            (element) => user === element.nombre && password === element.contraseña
        );

        if (encontrado) {
            setIdUsuario(encontrado.id); 
            if (encontrado.rol === 'admin') {
                alert('Hola jefe!');
                navigate(PRINCIPALADMIN);
            } else if (encontrado.rol === 'cliente') {
                alert('¡Bienvenido cliente!');
                navigate(PRINCIPALCLIENTE);
            } else {
                alert('Rol desconocido');
            }
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    };

    return (
        <Container className="login-container d-flex justify-content-center align-items-center">
            <Card className="login-card shadow">
                <Card.Body>
                    <h2 className="text-center mb-4">Iniciar Sesión</h2>
                    <Form>
                        <Form.Group controlId="formUsuario">
                            <Form.Label>Usuario:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese su usuario"
                                value={user}
                                onChange={(e) => setUser(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formContraseña" className="mt-3">
                            <Form.Label>Contraseña:</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Ingrese su contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <div className="d-grid gap-2 mt-4">
                            <Button variant="primary" onClick={Validacion}>
                                Iniciar Sesión
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Login;
