import { Button } from 'react-bootstrap';

import { colorTipo, tipoElemental } from '../../controllers/pokeapi';

const TipoElemental = ({ pokemon }) =>
{
    return (
        <div>
            <Button
                style={
                {
                    backgroundColor: colorTipo(pokemon.types[0].type.name),
                    borderColor: '#FFFFFF',
                    borderRadius: '10em',
                    minWidth: '5em',
                    marginRight: '0.5em'
                }}
            >
                {tipoElemental(pokemon.types[0].type.name)}
            </Button>
            {pokemon.types[1] !== undefined ?
                <Button
                    style={
                    {
                        backgroundColor: colorTipo(pokemon.types[1].type.name),
                        borderColor: '#FFFFFF',
                        borderRadius: '10em',
                        minWidth: '5em',
                        marginRight: '0.5em'
                    }}
                >
                    {tipoElemental(pokemon.types[1].type.name)}
                </Button>
            : <br />}
        </div>
    );
}

export default TipoElemental
