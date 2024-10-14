import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { Container,Row,Col } from 'react-bootstrap';
import Example from './Example';

export default function About() {
  return (
    <div>
      <Example />
      <Container>
        <Row>
          <h2 className='fs-4'>Publish Your Passions</h2>
          <p className='mt-6'> 
            Blogger.com is a platform that lets you publish your passions your way
            Blogger.com is a platform that lets you publish your passions your way
            Blogger.com is a platform that lets you publish your passions your way
            Blogger.com is a platform that lets you publish your passions your way
            Blogger.com is a platform that lets you publish your passions your way
            Blogger.com is a platform that lets you publish your passions your way
            Blogger.com is a platform that lets you publish your passions your way
            Blogger.com is a platform that lets you publish your passions your way
            Blogger.com is a platform that lets you publish your passions your way.
            <br />
            <button type="button" class="btn btn-primary"> Call to Action!</button>
          </p>
        </Row>

        <Row className='mt-6'>
          <Col lg={4}>
            <Card>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className=" mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} >
            <Card>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className=" mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className=" mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
            
      </Container>
    </div>
  )
}
