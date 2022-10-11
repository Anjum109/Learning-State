import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const data = useLoaderData();
    return (

        <div className='chart'>
            <h2>rate</h2>
            <LineChart
                width={500}
                height={400}
                data={data.data}
            >
                <XAxis dataKey="name" />
                <YAxis /><Legend />
                <Line type="monotone"
                    dataKey="total"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }} />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Statistics;