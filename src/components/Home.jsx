import { useState, useEffect } from 'react';

import { Navbar, Nav, Form, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row, Col, Card, Button } from 'react-bootstrap';

import { colorTipo } from '../controllers/pokeapi';

import PokeCard from './UI/PokeCard';

const Home = () =>
{
    const [api, setApi] = useState([]);

    const [nombre, setNombre] = useState('');

    const [tipo, setTipo] = useState('all');

    const filtrarNombre = (e) =>
    {
        setNombre(e);
    }

    const filtrarTipo = (e) =>
    {
        setTipo(e);
    }

    const tipoElemental = (type) =>
    {
        const config =
        {
            backgroundColor: colorTipo(type),
            borderColor: colorTipo(type),
            minWidth: "5em"
        }

        return config;
    }

    const consultarAPI = async () =>
    {
        const url = 'https://pokeapi.co/api/v2/pokemon?limit=649&offset=0';

        const response = await fetch(url);

        const data = await response.json();

        setApi(data.results);
    }

    useEffect(() =>
    {
        consultarAPI();
    }, []);

    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img src={'/pokeapi.png'} alt="pokeapi" style={{ maxHeight: '2.5em' }} />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse id="navbarScroll">

                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        />

                        <Form className="d-flex">
                            <Form.Control
                                type="text"
                                placeholder="Buscar"
                                className="me-2"
                                onChange={(e) => filtrarNombre(e.target.value)}
                            />
                        </Form>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container style={{ marginBlock: '1em' }}>
                <Card bg="light" variant="light">
                    <Card.Header as="h5">Filtros</Card.Header>
                    <Card.Body style={{ alignSelf: 'center' }}>
                        <Row xs="1" md="1" lg="1" xl="1">
                            <ButtonToolbar>
                                <Col style={{ textAlign: 'center', marginBlock: '1em' }}>
                                    <ButtonGroup className="me-2">
                                        <Button onClick={(e) => filtrarTipo(e.target.value)} value="grass" style={tipoElemental('grass')}>Planta</Button>
                                        <Button onClick={(e) => filtrarTipo(e.target.value)} value="fire" style={tipoElemental('fire')}>Fuego</Button>
                                        <Button onClick={(e) => filtrarTipo(e.target.value)} value="water" style={tipoElemental('water')}>Agua</Button>
                                    </ButtonGroup>
                                </Col>
                                <Col style={{ textAlign: 'center', marginBlock: '1em' }}>
                                    <ButtonGroup className="me-2">
                                        <Button onClick={(e) => filtrarTipo(e.target.value)} value="bug" style={tipoElemental('bug')}>Bicho</Button>
                                        <Button onClick={(e) => filtrarTipo(e.target.value)} value="normal" style={tipoElemental('normal')}>Normal</Button>
                                        <Button onClick={(e) => filtrarTipo(e.target.value)} value="poison" style={tipoElemental('poison')}>Veneno</Button>
                                    </ButtonGroup>
                                </Col>
                                <Col style={{ textAlign: 'center', marginBlock: '1em' }}>
                                    <ButtonGroup className="me-2">
                                        <Button onClick={(e) => filtrarTipo(e.target.value)} value="electric" style={tipoElemental('electric')}>Eléctrico</Button>
                                        <Button onClick={(e) => filtrarTipo(e.target.value)} value="ground" style={tipoElemental('ground')}>Tierra</Button>
                                        <Button onClick={(e) => filtrarTipo(e.target.value)} value="fairy" style={tipoElemental('fairy')}>Hada</Button>
                                    </ButtonGroup>
                                </Col>
                                <Col style={{ textAlign: 'center', marginBlock: '1em' }}>
                                    <ButtonGroup className="me-2">
                                        <Button onClick={(e) => filtrarTipo(e.target.value)} value="fighting" style={tipoElemental('fighting')}>Lucha</Button>
                                        <Button onClick={(e) => filtrarTipo(e.target.value)} value="psychic" style={tipoElemental('psychic')}>Psíquico</Button>
                                        <Button onClick={(e) => filtrarTipo(e.target.value)} value="rock" style={tipoElemental('rock')}>Roca</Button>
                                    </ButtonGroup>
                                </Col>
                            </ButtonToolbar>
                        </Row>
                        <Row xs="1" md="1" lg="1" xl="1">
                            <ButtonToolbar>
                                <Col style={{ textAlign: 'center', marginBlock: '1em' }}>
                                    <ButtonGroup className="me-2">
                                        <Button onClick={(e) => filtrarTipo(e.target.value)} value="ghost" style={tipoElemental('ghost')}>Fantasma</Button>
                                        <Button onClick={(e) => filtrarTipo(e.target.value)} value="ice" style={tipoElemental('ice')}>Hielo</Button>
                                        <Button onClick={(e) => filtrarTipo(e.target.value)} value="dragon" style={tipoElemental('dragon')}>Dragón</Button>
                                    </ButtonGroup>
                                </Col>
                                <Col style={{ textAlign: 'center', marginBlock: '1em' }}>
                                    <ButtonGroup className="me-2">
                                        <Button onClick={(e) => filtrarTipo(e.target.value)} value="dark" style={tipoElemental('dark')}>Siniestro</Button>
                                        <Button onClick={(e) => filtrarTipo(e.target.value)} value="steel" style={tipoElemental('steel')}>Acero</Button>
                                        <Button onClick={(e) => filtrarTipo(e.target.value)} value="flying" style={tipoElemental('flying')}>Volador</Button>
                                    </ButtonGroup>
                                </Col>
                                <Col style={{ textAlign: 'center', marginBlock: '1em' }}>
                                    <ButtonGroup className="me-2">
                                        <Button onClick={(e) => filtrarTipo(e.target.value)} value="all" style={tipoElemental('???')}>Todo</Button>
                                    </ButtonGroup>
                                </Col>
                            </ButtonToolbar>
                        </Row>
                    </Card.Body>
                </Card>

                <Row xs="1" md="2" lg="3" xl="4">
                    {api.filter((e) => e.name.toLowerCase().includes(nombre)).map((data) =>
                    <PokeCard
                        key={data.name}
                        pokemon={data.name}
                        type={tipo}
                    />)}
                </Row>
            </Container>

        </div>
    )
}

export default Home
