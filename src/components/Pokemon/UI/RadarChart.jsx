import
{
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';

import { Radar } from 'react-chartjs-2';

const RadarChart = ({ stats }) =>
{
    ChartJS.register
    (
        RadialLinearScale,
        PointElement,
        LineElement,
        Filler,
        Tooltip,
        Legend
    );

    const options =
    {
        responsive: true,
        plugins:
        {
            legend:
            {
                labels:
                {
                    font:
                    {
                        size: 18,
                    },
                },
                position: 'top',
            },
            title:
            {
                display: true,
                text: 'Características de combate',
            },
        },
        scale:
        {
            beginAtZero: true,
            min: 25,
            max: 255,
        },
        scales:
        {
            r:
            {
                pointLabels:
                {
                    font:
                    {
                        size: 18,
                    },
                },
                ticks:
                {
                    display: false,
                },
            },
        },
    };

    const labels =
    [
        ['PS', `${stats[0]}`],
        ['Ataque', `${stats[1]}`],
        ['Defensa', `${stats[2]}`],
        ['Velocidad', `${stats[3]}`],
        ['Defensa Especial', `${stats[4]}`],
        ['Ataque Especial', `${stats[5]}`]
    ];

    const data =
    {
        labels,
        datasets:
        [
            {
                label: 'Características base',
                data: stats,
                backgroundColor: 'rgba(201, 203, 207, 0.5)',
                borderColor: 'rgb(201, 203, 207)',
                borderWidth: 1,
                pointRadius: 0,
            },
        ],
    };

    return <Radar options={options} data={data} />;
}

export default RadarChart
