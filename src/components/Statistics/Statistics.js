import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './Statistics.css'

const Statistics = () => {
    const data = useLoaderData();
    return (

        <div>
            <h2 className='chart-headline'>Chart of total quizzes</h2>
            <div>

                <ResponsiveContainer width="95%" height={400}>
                    <LineChart
                        width={1000}
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
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;