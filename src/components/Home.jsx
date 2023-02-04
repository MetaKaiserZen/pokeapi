import { useState, useEffect } from 'react';

import { Navbar, Nav, Form, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import { Row, Col, Button } from 'react-bootstrap';

import { colorTipo } from '../controllers/pokeapi';

import PokeCard from './UI/PokeCard';

const Home = () =>
{
    const [api, setApi] = useState([]);

    const [nombre, setNombre] = useState('');

    const [tipoPrimario, setTipoPrimario] = useState('all');
    const [tipoSecundario, setTipoSecundario] = useState('all');

    const filtrarNombre = (e) =>
    {
        setNombre(e);
    }

    const filtrarTipoPrimario = (e) =>
    {
        setTipoPrimario(e);
    }

    const filtrarTipoSecundario = (e) =>
    {
        setTipoSecundario(e);
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
                <Accordion defaultActiveKey={['0', '1']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Pokémon de tipo elemental primario</Accordion.Header>
                        <Accordion.Body>
                            <Row xs="1" md="1" lg="1" xl="1">
                                <ButtonToolbar>
                                    <Col style={{ textAlign: 'center', marginBlock: '1em' }}>
                                        <ButtonGroup className="me-2">
                                            {tipoSecundario === 'grass' ?
                                                <Button style={tipoElemental('grass')} disabled>Planta</Button>
                                            : <Button onClick={(e) => filtrarTipoPrimario(e.target.value)} value="grass" style={tipoElemental('grass')}>Planta</Button>}
                                            {tipoSecundario === 'fire' ?
                                                <Button style={tipoElemental('fire')} disabled>Fuego</Button>
                                            : <Button onClick={(e) => filtrarTipoPrimario(e.target.value)} value="fire" style={tipoElemental('fire')}>Fuego</Button>}
                                            {tipoSecundario === 'water' ?
                                                <Button style={tipoElemental('water')} disabled>Agua</Button>
                                            : <Button onClick={(e) => filtrarTipoPrimario(e.target.value)} value="water" style={tipoElemental('water')}>Agua</Button>}
                                        </ButtonGroup>
                                    </Col>
                                    <Col style={{ textAlign: 'center', marginBlock: '1em' }}>
                                        <ButtonGroup className="me-2">
                                            {tipoSecundario === 'bug' ?
                                                <Button style={tipoElemental('bug')} disabled>Bicho</Button>
                                            : <Button onClick={(e) => filtrarTipoPrimario(e.target.value)} value="bug" style={tipoElemental('bug')}>Bicho</Button>}
                                            {tipoSecundario === 'normal' ?
                                                <Button style={tipoElemental('normal')} disabled>Normal</Button>
                                            : <Button onClick={(e) => filtrarTipoPrimario(e.target.value)} value="normal" style={tipoElemental('normal')}>Normal</Button>}
                                            {tipoSecundario === 'poison' ?
                                                <Button style={tipoElemental('poison')} disabled>Veneno</Button>
                                            : <Button onClick={(e) => filtrarTipoPrimario(e.target.value)} value="poison" style={tipoElemental('poison')}>Veneno</Button>}
                                        </ButtonGroup>
                                    </Col>
                                    <Col style={{ textAlign: 'center', marginBlock: '1em' }}>
                                        <ButtonGroup className="me-2">
                                            {tipoSecundario === 'electric' ?
                                                <Button style={tipoElemental('electric')} disabled>Eléctrico</Button>
                                            : <Button onClick={(e) => filtrarTipoPrimario(e.target.value)} value="electric" style={tipoElemental('electric')}>Eléctrico</Button>}
                                            {tipoSecundario === 'ground' ?
                                                <Button style={tipoElemental('ground')} disabled>Normal</Button>
                                            : <Button onClick={(e) => filtrarTipoPrimario(e.target.value)} value="ground" style={tipoElemental('ground')}>Tierra</Button>}
                                            {tipoSecundario === 'fairy' ?
                                                <Button style={tipoElemental('fairy')} disabled>Hada</Button>
                                            : <Button onClick={(e) => filtrarTipoPrimario(e.target.value)} value="fairy" style={tipoElemental('fairy')}>Hada</Button>}
                                        </ButtonGroup>
                                    </Col>
                                    <Col style={{ textAlign: 'center', marginBlock: '1em' }}>
                                        <ButtonGroup className="me-2">
                                            {tipoSecundario === 'fighting' ?
                                                <Button style={tipoElemental('fighting')} disabled>Lucha</Button>
                                            : <Button onClick={(e) => filtrarTipoPrimario(e.target.value)} value="fighting" style={tipoElemental('fighting')}>Lucha</Button>}
                                            {tipoSecundario === 'psychic' ?
                                                <Button style={tipoElemental('psychic')} disabled>Psíquico</Button>
                                            : <Button onClick={(e) => filtrarTipoPrimario(e.target.value)} value="psychic" style={tipoElemental('psychic')}>Psíquico</Button>}
                                            {tipoSecundario === 'rock' ?
                                                <Button style={tipoElemental('rock')} disabled>Roca</Button>
                                            : <Button onClick={(e) => filtrarTipoPrimario(e.target.value)} value="rock" style={tipoElemental('rock')}>Roca</Button>}
                                        </ButtonGroup>
                                    </Col>
                                </ButtonToolbar>
                            </Row>
                            <Row xs="1" md="1" lg="1" xl="1">
                                <ButtonToolbar>
                                    <Col style={{ textAlign: 'center', marginBlock: '1em' }}>
                                        <ButtonGroup className="me-2">
                                            {tipoSecundario === 'ghost' ?
                                                <Button style={tipoElemental('ghost')} disabled>Fantasma</Button>
                                            : <Button onClick={(e) => filtrarTipoPrimario(e.target.value)} value="ghost" style={tipoElemental('ghost')}>Fantasma</Button>}
                                            {tipoSecundario === 'ice' ?
                                                <Button style={tipoElemental('ice')} disabled>Hielo</Button>
                                            : <Button onClick={(e) => filtrarTipoPrimario(e.target.value)} value="ice" style={tipoElemental('ice')}>Hielo</Button>}
                                            {tipoSecundario === 'dragon' ?
                                                <Button style={tipoElemental('dragon')} disabled>Dragón</Button>
                                            : <Button onClick={(e) => filtrarTipoPrimario(e.target.value)} value="dragon" style={tipoElemental('dragon')}>Dragón</Button>}
                                        </ButtonGroup>
                                    </Col>
                                    <Col style={{ textAlign: 'center', marginBlock: '1em' }}>
                                        <ButtonGroup className="me-2">
                                            {tipoSecundario === 'dark' ?
                                                <Button style={tipoElemental('dark')} disabled>Siniestro</Button>
                                            : <Button onClick={(e) => filtrarTipoPrimario(e.target.value)} value="dark" style={tipoElemental('dark')}>Siniestro</Button>}
                                            {tipoSecundario === 'steel' ?
                                                <Button style={tipoElemental('steel')} disabled>Acero</Button>
                                            : <Button onClick={(e) => filtrarTipoPrimario(e.target.value)} value="steel" style={tipoElemental('steel')}>Acero</Button>}
                                            {tipoSecundario === 'flying' ?
                                                <Button style={tipoElemental('flying')} disabled>Volador</Button>
                                            : <Button onClick={(e) => filtrarTipoPrimario(e.target.value)} value="flying" style={tipoElemental('flying')}>Volador</Button>}
                                        </ButtonGroup>
                                    </Col>
                                    <Col style={{ textAlign: 'center', marginBlock: '1em' }}>
                                        <ButtonGroup className="me-2">
                                            <Button onClick={(e) => filtrarTipoPrimario(e.target.value)} value="all" style={tipoElemental('???')}>Todo</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xs="12" lg="3" style={{ textAlign: 'center', marginBlock: '1em' }}>
                                        <div className="d-grid gap-2">
                                            <Button
                                                style={
                                                {
                                                    fontWeight: '500',
                                                    backgroundColor: colorTipo(tipoPrimario),
                                                    border: 'rgba(0, 0, 0, 0.175) solid 1px'
                                                }}
                                            >
                                                Tipo elemental primario
                                            </Button>
                                        </div>
                                    </Col>
                                </ButtonToolbar>
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Pokémon de tipo elemental secundario</Accordion.Header>
                        <Accordion.Body>
                            <Row xs="1" md="1" lg="1" xl="1">
                                <ButtonToolbar>
                                    <Col style={{ textAlign: 'center', marginBlock: '1em' }}>
                                        <ButtonGroup className="me-2">
                                            {tipoPrimario === 'grass' ?
                                                <Button style={tipoElemental('grass')} disabled>Planta</Button>
                                            : <Button onClick={(e) => filtrarTipoSecundario(e.target.value)} value="grass" style={tipoElemental('grass')}>Planta</Button>}
                                            {tipoPrimario === 'fire' ?
                                                <Button style={tipoElemental('fire')} disabled>Fuego</Button>
                                            : <Button onClick={(e) => filtrarTipoSecundario(e.target.value)} value="fire" style={tipoElemental('fire')}>Fuego</Button>}
                                            {tipoPrimario === 'water' ?
                                                <Button style={tipoElemental('water')} disabled>Agua</Button>
                                            : <Button onClick={(e) => filtrarTipoSecundario(e.target.value)} value="water" style={tipoElemental('water')}>Agua</Button>}
                                        </ButtonGroup>
                                    </Col>
                                    <Col style={{ textAlign: 'center', marginBlock: '1em' }}>
                                        <ButtonGroup className="me-2">
                                            {tipoPrimario === 'bug' ?
                                                <Button style={tipoElemental('bug')} disabled>Bicho</Button>
                                            : <Button onClick={(e) => filtrarTipoSecundario(e.target.value)} value="bug" style={tipoElemental('bug')}>Bicho</Button>}
                                            {tipoPrimario === 'normal' ?
                                                <Button style={tipoElemental('normal')} disabled>Normal</Button>
                                            : <Button onClick={(e) => filtrarTipoSecundario(e.target.value)} value="normal" style={tipoElemental('normal')}>Normal</Button>}
                                            {tipoPrimario === 'poison' ?
                                                <Button style={tipoElemental('poison')} disabled>Veneno</Button>
                                            : <Button onClick={(e) => filtrarTipoSecundario(e.target.value)} value="poison" style={tipoElemental('poison')}>Veneno</Button>}
                                        </ButtonGroup>
                                    </Col>
                                    <Col style={{ textAlign: 'center', marginBlock: '1em' }}>
                                        <ButtonGroup className="me-2">
                                            {tipoPrimario === 'electric' ?
                                                <Button style={tipoElemental('electric')} disabled>Eléctrico</Button>
                                            : <Button onClick={(e) => filtrarTipoSecundario(e.target.value)} value="electric" style={tipoElemental('electric')}>Eléctrico</Button>}
                                            {tipoPrimario === 'ground' ?
                                                <Button style={tipoElemental('ground')} disabled>Tierra</Button>
                                            : <Button onClick={(e) => filtrarTipoSecundario(e.target.value)} value="ground" style={tipoElemental('ground')}>Tierra</Button>}
                                            {tipoPrimario === 'fairy' ?
                                                <Button style={tipoElemental('fairy')} disabled>Hada</Button>
                                            : <Button onClick={(e) => filtrarTipoSecundario(e.target.value)} value="fairy" style={tipoElemental('fairy')}>Hada</Button>}
                                        </ButtonGroup>
                                    </Col>
                                    <Col style={{ textAlign: 'center', marginBlock: '1em' }}>
                                        <ButtonGroup className="me-2">
                                            {tipoPrimario === 'fighting' ?
                                                <Button style={tipoElemental('fighting')} disabled>Lucha</Button>
                                            : <Button onClick={(e) => filtrarTipoSecundario(e.target.value)} value="fighting" style={tipoElemental('fighting')}>Lucha</Button>}
                                            {tipoPrimario === 'psychic' ?
                                                <Button style={tipoElemental('psychic')} disabled>Psíquico</Button>
                                            : <Button onClick={(e) => filtrarTipoSecundario(e.target.value)} value="psychic" style={tipoElemental('psychic')}>Psíquico</Button>}
                                            {tipoPrimario === 'rock' ?
                                                <Button style={tipoElemental('rock')} disabled>Roca</Button>
                                            : <Button onClick={(e) => filtrarTipoSecundario(e.target.value)} value="rock" style={tipoElemental('rock')}>Roca</Button>}
                                        </ButtonGroup>
                                    </Col>
                                </ButtonToolbar>
                            </Row>
                            <Row xs="1" md="1" lg="1" xl="1">
                                <ButtonToolbar>
                                    <Col style={{ textAlign: 'center', marginBlock: '1em' }}>
                                        <ButtonGroup className="me-2">
                                            {tipoPrimario === 'ghost' ?
                                                <Button style={tipoElemental('ghost')} disabled>Fantasma</Button>
                                            : <Button onClick={(e) => filtrarTipoSecundario(e.target.value)} value="ghost" style={tipoElemental('ghost')}>Fantasma</Button>}
                                            {tipoPrimario === 'ice' ?
                                                <Button style={tipoElemental('ice')} disabled>Hielo</Button>
                                            : <Button onClick={(e) => filtrarTipoSecundario(e.target.value)} value="ice" style={tipoElemental('ice')}>Hielo</Button>}
                                            {tipoPrimario === 'dragon' ?
                                                <Button style={tipoElemental('dragon')} disabled>Dragón</Button>
                                            : <Button onClick={(e) => filtrarTipoSecundario(e.target.value)} value="dragon" style={tipoElemental('dragon')}>Dragón</Button>}
                                        </ButtonGroup>
                                    </Col>
                                    <Col style={{ textAlign: 'center', marginBlock: '1em' }}>
                                        <ButtonGroup className="me-2">
                                            {tipoPrimario === 'dark' ?
                                                <Button style={tipoElemental('dark')} disabled>Siniestro</Button>
                                            : <Button onClick={(e) => filtrarTipoSecundario(e.target.value)} value="dark" style={tipoElemental('dark')}>Siniestro</Button>}
                                            {tipoPrimario === 'steel' ?
                                                <Button style={tipoElemental('steel')} disabled>Acero</Button>
                                            : <Button onClick={(e) => filtrarTipoSecundario(e.target.value)} value="steel" style={tipoElemental('steel')}>Acero</Button>}
                                            {tipoPrimario === 'flying' ?
                                                <Button style={tipoElemental('flying')} disabled>Volador</Button>
                                            : <Button onClick={(e) => filtrarTipoSecundario(e.target.value)} value="flying" style={tipoElemental('flying')}>Volador</Button>}
                                        </ButtonGroup>
                                    </Col>
                                    <Col style={{ textAlign: 'center', marginBlock: '1em' }}>
                                        <ButtonGroup className="me-2">
                                            <Button onClick={(e) => filtrarTipoSecundario(e.target.value)} value="all" style={tipoElemental('???')}>Todo</Button>
                                        </ButtonGroup>
                                    </Col>
                                    <Col xs="12" lg="3" style={{ textAlign: 'center', marginBlock: '1em' }}>
                                        <div className="d-grid gap-2">
                                            <Button
                                                style={
                                                {
                                                    fontWeight: '500',
                                                    backgroundColor: colorTipo(tipoSecundario),
                                                    border: 'rgba(0, 0, 0, 0.175) solid 1px'
                                                }}
                                            >
                                                Tipo elemental secundario
                                            </Button>
                                        </div>
                                    </Col>
                                </ButtonToolbar>
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <Row xs="1" md="2" lg="3" xl="4">
                    {api.filter((e) => e.name.toLowerCase().includes(nombre)).map((data) =>
                    <PokeCard
                        key={data.name}
                        pokemon={data.name}
                        primaryType={tipoPrimario}
                        secondaryType={tipoSecundario}
                    />)}
                </Row>
            </Container>

        </div>
    )
}

export default Home
