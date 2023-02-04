import { useState, useEffect } from 'react';

import { Col, Card } from 'react-bootstrap';

import { colorTipo } from '../../controllers/pokeapi';

import TipoElemental from './TipoElemental';

const PokeCard = (props) =>
{
    const [pokemon, setPokemon] = useState();

    const [index, setIndex] = useState();
    const [image, setImage] = useState();

    const consultarAPI = async ({ pokemon }) =>
    {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;

        const response = await fetch(url);

        const data = await response.json();

        const index = data.id;
        const imagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${index}.gif`;

        setPokemon(data);

        setIndex(index);
        setImage(imagen);
    }

    useEffect(() =>
    {
        consultarAPI(props);
    }, []);

    if (pokemon &&
        ((pokemon.types[1] === undefined &&
        ((props.primaryType === 'all' || pokemon.types[0].type.name === props.primaryType) && props.secondaryType === 'all')) ||
        ((pokemon.types[1] !== undefined) &&
        ((props.primaryType === 'all' && props.secondaryType === 'all') ||
        (pokemon.types[0].type.name === props.primaryType && props.secondaryType === 'all') ||
        (props.primaryType === 'all' && pokemon.types[1].type.name === props.secondaryType) ||
        (pokemon.types[0].type.name === props.primaryType && pokemon.types[1].type.name === props.secondaryType)))))
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
                                <img src={image} alt={image}></img>
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
                            <Card.Footer>
                                <div className="d-grid gap-2">
                                    <a href={`${pokemon.name}`} className="btn btn-outline-dark">Ver</a>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                </div>
            );
        }
};

export default PokeCard
