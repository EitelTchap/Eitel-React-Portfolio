import React from 'react';
import Hero from '../components/Hero';
import Container from '../components/Container';
import Row from '../components/Row';
import Col from '../components/Col';
import DownloadCV from '../components/CV';

function Main() {
  return (
    <div>
      <Hero backgroundImage="https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/reactt-dark_870x220.png?sfvrsn=ef69fd61_3">
        <Row>
          <Col size="md-6">
            <h1>Hi, I am Eitel</h1>
            <h2>I am a Front End Web Developer</h2>
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
        <img src="https://media.licdn.com/dms/image/D4E03AQGRfQv9LkcIYQ/profile-displayphoto-shrink_800_800/0/1696235178675?e=1715212800&v=beta&t=2jicjrHh3T4KXnsUj4qLCCkhVsKkFz2f-omzZMZvBxI"
          style={{ width: '20%', height: '20%', marginTop: '10px', marginBottom: '20px'}}
        />
        </Row>
        <Row>
          <Col size="md-12">
            <h6>
              Need a clean and dynamic website that uses the latest technology?
              I am the guy for the job! You can go to "Projects" to view my work.
            </h6>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <DownloadCV>
              View and download my CV here:
            </DownloadCV>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Main;
