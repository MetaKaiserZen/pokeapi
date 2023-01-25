import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Navbar, Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row, Col, Card, ListGroup } from 'react-bootstrap';

import { colorTipo } from '../../controllers/pokeapi';

import TipoElemental from '../UI/TipoElemental';

import Habilidad from './UI/Habilidad';
import RadarChart from './UI/RadarChart';

const Pokemon = () =>
{
    const { id } = useParams();

    const [pokemon, setPokemon] = useState();

    const [index, setIndex] = useState();
    const [image, setImage] = useState();

    const [abilities, setAbilities] = useState([]);
    const [stats, setStats] = useState([]);

    const consultarAPI = async () =>
    {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;

        const response = await fetch(url);

        const data = await response.json();

        const index = data.id;
        const imagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`;

        setPokemon(data);

        setIndex(index);
        setImage(imagen);

        setAbilities(data.abilities);

        setStats(
        [
            data.stats[0].base_stat,
            data.stats[1].base_stat,
            data.stats[2].base_stat,
            data.stats[5].base_stat,
            data.stats[4].base_stat,
            data.stats[3].base_stat
        ]);
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
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">

                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        />

                    </Navbar.Collapse>
                </Container>
            </Navbar>

            { pokemon ?
                <Container style={{ marginBlock: '1em' }}>
                    <Row xs="1" md="1" lg="2" xl="2">

                        <Col lg="5" xl="5">
                            <Card style={{ marginBlock: '2em' }}>
                                <Card.Header
                                    style={
                                    {
                                        backgroundColor: colorTipo(pokemon.types[0].type.name),
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        minHeight: '20em'
                                    }}
                                >
                                    <img src={image} alt={image} style={{ maxWidth: '20em' }}></img>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Subtitle
                                        className="mb-2 text-muted">#
                                        {
                                            index.toString().length === 1 ? `00${index}`
                                            : (index.toString().length === 2 ? `0${index}` : index)
                                        }
                                    </Card.Subtitle>
                                    <Card.Title>{pokemon.name.charAt(0).toUpperCase()}{pokemon.name.slice(1)}</Card.Title>
                                    <TipoElemental pokemon={pokemon} />
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>
                                        <Card.Title>Habilidades</Card.Title>
                                        <div>
                                            {abilities.filter((e) => e.is_hidden === false).map((data) =>
                                            <Habilidad
                                                key={data.ability.name}
                                                url={data.ability.url}
                                            />)}
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Card.Title>Habilidad oculta</Card.Title>
                                            {abilities.filter((e) => e.is_hidden === true).map((data) =>
                                            <Habilidad
                                                key={data.ability.name}
                                                url={data.ability.url}
                                            />)}
                                    </ListGroup.Item>
                                </ListGroup>
                                <Card.Footer>
                                    <div className="d-grid gap-2">
                                        <a href="/" className="btn btn-outline-dark">Volver</a>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Col>

                        <Col
                            xl="7"
                            style={
                            {
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <RadarChart stats={stats} />
                        </Col>

                    </Row>
                </Container>
            : '' }
        </div>
    );
}

export default Pokemon
