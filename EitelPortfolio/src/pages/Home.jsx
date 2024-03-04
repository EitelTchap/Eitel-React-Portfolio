import React from 'react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';

function Main() {
  return (
    <div>
      <Hero backgroundImage="https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/reactt-dark_870x220.png?sfvrsn=ef69fd61_3">
        <Row>
          <Col size="md-6">
            <h1>Hi, I am Eitel</h1>
            <h2>I am a Front End Web Developer</h2>
          </Col>

          <Col size="md-4">
            <img src="https://media.licdn.com/dms/image/D4E03AQGRfQv9LkcIYQ/profile-displayphoto-shrink_800_800/0/1696235178675?e=1715212800&v=beta&t=2jicjrHh3T4KXnsUj4qLCCkhVsKkFz2f-omzZMZvBxI"></img>
          </Col>
        </Row>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome to my REACT Portfolio!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Need a clean and dynamic website that uses the latest technology?
              I am the guy for the job!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Main;
