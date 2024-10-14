import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Example from './Example';
import DataGridDemo from './DataGridDemo';

export default function Contact() {
  return (
    <div>
      <Example />
      <Container>
        <Row>
          <Col lg={6}>
          <h2 className='fs-5'>Publish Your Passions</h2>
          <p className='mt-6'> 
            Blogger.com is a platform that lets you publish your passions your way
            Blogger.com is a platform that lets you publish your passions your way
            Blogger.com is a platform that lets you publish your passions your way
            Blogger.com is a platform that lets you publish your passions your way
            Blogger.com is a platform that lets you publish your passions your way.
            <br />
            <button type="button" class="btn btn-primary"> Call to Action!</button>
          </p>
          </Col>
          <Col lg={6}>
            <h2 className='fs-5'>Data Table :</h2>
            <DataGridDemo />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
