import React from 'react';
import Example from './Example';
import { Container,Row,Col } from 'react-bootstrap';

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
  } from "recharts";
  
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Home() {
  return (
    <div>
      <Example />
      <Container>
        <Row>
            <Col lg={6}>
                <LineChart width={500} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </Col>
            <Col lg={6}>
                <h2 className='fs-5'>Blogspot</h2>
                <p>
                 Blogger is an American online content management system founded Blogger 
                 Blogger is an American online content management system founded Blogger 
                 Blogger is an American online content management system founded Blogger 
                 Blogger is an American online content management system founded Blogger.
                 <br />
                 <button type="button" class="btn btn-primary"> Call to Action!</button>
                </p>
            </Col>
        </Row>
      </Container>
    </div>
  )
}
