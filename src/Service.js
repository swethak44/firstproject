import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import { BarChart } from '@mui/x-charts/BarChart';
import Example from './Example';


export default function Service() {
  return (
    <div>
      <Example />
      <Container>
        <Row>
          <Col lg={6}>
            <BarChart
              series={[
                { data: [35, 44, 24, 34] },
                { data: [51, 6, 49, 30] },
                { data: [15, 25, 30, 50] },
                { data: [60, 50, 15, 25] },
              ]}
              height={290}
              xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
              margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
            />
          </Col>
          <Col lg={6}>
            <h2 className='fs-3'>Blogspot</h2>
            <p className='mt-6'>
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
