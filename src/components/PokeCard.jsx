import { useState, useEffect } from 'react';

import { Col, Card, Button } from 'react-bootstrap';

import { colorTipo } from '../controllers/pokeapi';

import TipoElemental from './TipoElemental';

const PokeCard = (props) =>
{
    const [id, setID] = useState();
    const [pokemon, setPokemon] = useState();
    const [image, setImage] = useState();

    const consultarAPI = async ({ pokemon }) =>
    {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;

        const response = await fetch(url);

        const data = await response.json();

        const id = data.game_indices.slice(-2)[0].game_index;
        const imagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`;

        setID(id);
        setPokemon(data);
        setImage(imagen);
    }

    useEffect(() =>
    {
        consultarAPI(props);
    }, []);

    if (pokemon &&
        (props.type === 'all' ||
        pokemon.types[0].type.name === props.type ||
        (pokemon.types[1] !== undefined && pokemon.types[1].type.name === props.type)))
        {
            return (
                <div>
                    <Col>
                        <Card style={{ marginBlock: '2em' }}>
                            <Card.Header
                                style={
                                {
                                    backgroundColor: colorTipo(pokemon.types[0].type.name),
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'end',
                                    minHeight: '10em'
                                }}
                            >
                                <img src={image}></img>
                            </Card.Header>
                            <Card.Body>
                                <Card.Subtitle
                                    className="mb-2 text-muted">#
                                    {
                                        id.toString().length === 1 ? `00${id}`
                                        : (id.toString().length === 2 ? `0${id}` : id)
                                    }
                                </Card.Subtitle>
                                <Card.Title>{pokemon.name.charAt(0).toUpperCase()}{pokemon.name.slice(1)}</Card.Title>
                                <TipoElemental pokemon={pokemon} />
                            </Card.Body>
                            <Card.Footer>
                                <div className="d-grid gap-2">
                                    <Button variant="outline-dark">Ver</Button>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                </div>
            );
        }
};

export default PokeCard
