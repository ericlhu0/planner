import React from 'react'
//
import { Line } from 'react-chartjs-2';


const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
        },
    ],
};

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};


const SleepTracker = () => {

    return (
        <div>
            <div className='signup w3 bg-white p-4'>
                <h1 className='font-bold text-2xl mb-4'>Sleep Tracker</h1>
                <canvas id="myChart" width="400" height="400"></canvas>
            </div>
            <div className='header'>
                <h1 className='title'>Line Chart</h1>
                <div className='links'>
                    <a
                        className='btn btn-gh'
                        href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Line.js'
                    >
                        Github Source
                    </a>
                </div>
            </div>
            <Line data={data} options={options} />
        </div>
    )
}

export default SleepTracker