const colorTipo = (data) =>
{
    let colorTipo;

    switch (data)
    {
        case 'steel': colorTipo = '#60A1B8';
            break;
        case 'water': colorTipo = '#2980EF';
            break;
        case 'bug': colorTipo = '#91A119';
            break;
        case 'dragon': colorTipo = '#5061E1';
            break;
        case 'electric': colorTipo = '#FAC000';
            break;
        case 'ghost': colorTipo = '#704170';
            break;
        case 'fire': colorTipo = '#E62829';
            break;
        case 'fairy': colorTipo = '#F170F1';
            break;
        case 'ice': colorTipo = '#3FD8FF';
            break;
        case 'fighting': colorTipo = '#FF8000';
            break;
        case 'normal': colorTipo = '#9FA19F';
            break;
        case 'grass': colorTipo = '#3FA129';
            break;
        case 'psychic': colorTipo = '#F14179';
            break;
        case 'rock': colorTipo = '#AFA981';
            break;
        case 'dark': colorTipo = '#50413F';
            break;
        case 'ground': colorTipo = '#915121';
            break
        case 'poison': colorTipo = '#9141CB';
            break
        case 'flying': colorTipo = '#81B9EF';
            break;
        default: colorTipo = '#68A090';
            break;
    }

    return colorTipo;
}

const tipoElemental = (data) =>
{
    let tipoElemental;

    switch (data)
    {
        case 'steel': tipoElemental = 'Acero';
            break;
        case 'water': tipoElemental = 'Agua';
            break;
        case 'bug': tipoElemental = 'Bicho';
            break;
        case 'dragon': tipoElemental = 'Dragón';
            break;
        case 'electric': tipoElemental = 'Eléctrico';
            break;
        case 'ghost': tipoElemental = 'Fantasma';
            break;
        case 'fire': tipoElemental = 'Fuego';
            break;
        case 'fairy': tipoElemental = 'Hada';
            break;
        case 'ice': tipoElemental = 'Hielo';
            break;
        case 'fighting': tipoElemental = 'Lucha';
            break;
        case 'normal': tipoElemental = 'Normal';
            break;
        case 'grass': tipoElemental = 'Planta';
            break;
        case 'psychic': tipoElemental = 'Psíquico';
            break;
        case 'rock': tipoElemental = 'Roca';
            break;
        case 'dark': tipoElemental = 'Siniestro';
            break;
        case 'ground': tipoElemental = 'Tierra';
            break;
        case 'poison': tipoElemental = 'Veneno';
            break;
        case 'flying': tipoElemental = 'Volador';
            break;
        default: tipoElemental = '???';
            break
    }

    return tipoElemental;
}

export { colorTipo, tipoElemental }
