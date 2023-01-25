import { useState, useEffect } from 'react';

import { Button } from 'react-bootstrap';

const Habilidad = (props) =>
{
    const [ability, setAbility] = useState();

    const consultarAPI = async ({ url }) =>
    {
        const response = await fetch(url);

        const data = await response.json();

        setAbility(data);
    }

    useEffect(() =>
    {
        consultarAPI(props);
    }, []);

    if (ability)
    {
        return (
            <Button
                variant="outline-dark"
                style={
                {
                    minWidth: '5em',
                    marginRight: '0.5em',
                    marginBottom: '0.5em'
                }}
            >
                {ability.names[5].name}
            </Button>
        );
    }
}

export default Habilidad
