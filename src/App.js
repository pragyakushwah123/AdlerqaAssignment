import React from 'react';
import { Container, Navbar, Nav, Button, Row, Col, Form, Card, Accordion, Carousel } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import Marquee from 'react-fast-marquee';

const LandingPage = () => {
  const stats = [
    { number: '60+', text: 'brands partnered with' },
    { number: '3K+', text: 'brand content assets created' },
    { number: '1K+', text: 'global partners and collaborators' },
    { number: '100+', text: 'cities worldwide' },
  ];

  const faqs = [
    { question: 'How do I sign up?', answer: 'Answer content here' },
    { question: 'What information do I need to provide during the sign-up process?', answer: 'Answer content here' },
    { question: 'Is my information secure during the sign-up process?', answer: 'Answer content here' },
    { question: 'Who can sign?', answer: 'Answer content here' },
    { question: 'What are the terms and conditions for the collaboration?', answer: 'Answer content here' },
    { question: 'What is the minimum duration of the contract?', answer: 'Answer content here' },
  ];

  return (
    <>
      {/* Navigation */}
      <Navbar bg="white" expand="lg" className="py-3">
        <Container>
          <Navbar.Brand href="#home">
            <img src="/logo.png" alt="Company Logo" height="30" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="#services">SERVICES</Nav.Link>
              <Nav.Link href="#work">WORK</Nav.Link>
              <Nav.Link href="#about">ABOUT</Nav.Link>
              <Button variant="danger" className="ms-3">GET STARTED</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <Container className="py-5">
        <Row className="align-items-center">
          <Col md={7}>
            <h1 className="display-4 fw-bold">
              WE ARE A<br />
              GLOBAL <span className="text-danger">PRODUCTION</span><br />
              AGENCY
            </h1>
            <p className="lead">
              Designed with the specific needs of large B2B enterprises in mind,
              our platform offers a comprehensive solution to simplify.
            </p>
            <Button variant="danger" size="lg">
              GET PROFESSIONAL VIDEO SERVICES →
            </Button>
          </Col>
          <Col md={5}>
            <img src="/Mask group.png" alt="Hero" className="img-fluid" />
          </Col>
        </Row>
      </Container>

      {/* Partner Logos */}
      <Container className="py-2">
        <Marquee>
        <Row className="align-items-center g-0">
          {['ServiceNow', 'Sequoia','Sequoia_Capital_logo 1', 'indiagold_transparent_logo_website', 'IKEA','image 755','2560px-Ikea_logo','Swiggy_logo 1','ServiceNow',].map((partner) => (
            <Col key={partner} xs={6} md={1} className="d-flex justify-content-center">
              <img src={`/${partner}.png`} alt={partner} className="img-fluid w-50" />
            </Col>
          ))}
        </Row>
        </Marquee>
      </Container>

      {/* Expertise Section */}
      <Container className="py-5">
        <h2 className="display-5 fw-bold mb-4">
          Our expertise and passion<br />
          breathe life into your narratives
        </h2>
        <Row>
          <Col md={6}>
            <img src="/Mask group pro.png" alt="Expertise" className="img-fluid rounded" />
          </Col>
          <Col md={6}>
            <div className="ps-md-4">
              <h5 className="text-muted mb-3">Innovative</h5>
              <h5 className="text-muted mb-3">Reliable</h5>
              <p className="text-muted">
                Creation ensuring your messages resonate worldwide.
                From concept to distribution, our platform serves as your
                partner in every step.
              </p>
              <h5 className="text-muted mb-3">Quality</h5>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Global Section */}
      <Container className="py-5">
        <h6 className="text-danger mb-4">WE ARE GLOBAL</h6>
        <Row>
          {stats.map((stat, index) => (
            <Col key={index} md={3} className="mb-4">
              <h2 className="display-4 fw-bold">{stat.number}</h2>
              <p className="text-muted">{stat.text}</p>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Testimonials carousel */}
    <Container className="py-5">
      <h6 className="text-danger mb-4">TESTIMONY FROM OUR PARTNERS</h6>
      <Carousel controls={true} prevIcon={<span className="carousel-control-prev-icon bg-dark rounded-circle p-3" aria-hidden="true" />}
        nextIcon={<span className="carousel-control-next-icon bg-dark rounded-circle p-3" aria-hidden="true" />}>
        {/* Testimonial 1 */}
        <Carousel.Item>
          <Card className="border-0">
            <Row>
              <Col md={4}>
                <img src="/testimonial.png" alt="Testimonial 1" className="img-fluid rounded" />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <p className="lead">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                  <h5>LISSA SMITH</h5>
                  <p className="text-muted">DIRECTOR OF MARKETING AND COMMUNICATIONS</p>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Carousel.Item>

        {/* Testimonial 2 */}
        <Carousel.Item>
          <Card className="border-0">
            <Row>
              <Col md={4}>
                <img src="/testimonial.png" alt="Testimonial 2" className="img-fluid rounded" />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <p className="lead">
                    Another amazing testimonial text. The client is extremely happy with our services!
                  </p>
                  <h5>JOHN DOE</h5>
                  <p className="text-muted">CEO OF EXAMPLE COMPANY</p>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Carousel.Item>

        {/* Testimonial 3 */}
        <Carousel.Item>
          <Card className="border-0">
            <Row>
              <Col md={4}>
                <img src="/testimonial.png" alt="Testimonial 3" className="img-fluid rounded" />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <p className="lead">
                    We have been working with them for years, and the experience has been phenomenal!
                  </p>
                  <h5>JANE DOE</h5>
                  <p className="text-muted">HEAD OF OPERATIONS</p>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Carousel.Item>
      </Carousel>
    </Container>

      {/* FAQ Section */}
      <Container className="py-5">
        <h2 className="display-6 mb-4">Frequently asked questions</h2>
        <Accordion>
          {faqs.map((faq, index) => (
            <Accordion.Item key={index} eventKey={index.toString()}>
              <Accordion.Header>{faq.question}</Accordion.Header>
              <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>

      {/* Contact Form */}
      <Container className="py-5">
        <Row>
          <Col md={6}>
            <h2 className="display-5 fw-bold">
              LETS START<br />
              SOMETHING<br />
              <span className="text-danger">NEW</span><br />
              TOGETHER
            </h2>
            <Row className="mt-4">
              <Col xs={6}>
                <img src="/Marin.png" alt="Team Member" className="rounded-circle" width="60" />
                <p className="small mt-2">
                  <p>All-round advertising go to lady. Has a thing for stories: she calls this the side effect of a life lived with plot twists.</p>
                  <strong>John Doe</strong><br />
                  Global Lead
                </p>
              </Col>
              <Col xs={6}>
                <img src="/Ayesha.png" alt="Team Member" className="rounded-circle" width="60" />
                <p className="small mt-2">
                  <p>All-round advertising go to lady. Has a thing for stories: she calls this the side effect of a life lived with plot twists.</p>
                  <strong>Jane Smith</strong><br />
                  Global Lead
                </p>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Card className="p-4 border-0 bg-light">
              <h4>Give us few details and we'll get in touch</h4>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Name*" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Company name" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="email" placeholder="Email*" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="tel" placeholder="Phone no*" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control as="textarea" rows={3} placeholder="Message*" />
                </Form.Group>
                <Button variant="danger" type="submit" className="w-100">
                  CONTACT US →
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
      {/*Unleash*/}
      <Container className="py-4">
  <Marquee>
    <Row className="bg-black justify-content-center align-items-center ">
      <h1 className="text-white display-4 text-center">
         | UNLEASH VISUAL IMPACT | UNLEASH VISUAL IMPACT |
      </h1>
    </Row>
  </Marquee>
</Container>


      {/* Footer */}
      <footer className="bg-dark text-white py-5">
        <Container>
          <Row>
            <Col md={3}>
              <h5>COMPANY</h5>
              <Nav className="flex-column">
                <Nav.Link href="#" className="text-white p-0">Who Are We</Nav.Link>
              </Nav>
            </Col>
            <Col md={3}>
              <h5>RESOURCES</h5>
              <Nav className="flex-column">
                <Nav.Link href="#" className="text-white p-0">Blog</Nav.Link>
              </Nav>
            </Col>
            <Col md={3}>
              <h5>WORK</h5>
              <Nav className="flex-column">
                <Nav.Link href="#" className="text-white p-0">Video</Nav.Link>
                <Nav.Link href="#" className="text-white p-0">Print</Nav.Link>
                <Nav.Link href="#" className="text-white p-0">Post</Nav.Link>
              </Nav>
            </Col>
            <Col md={3}>
              <h5>CONTACT</h5>
              <Nav className="flex-column">
                <Nav.Link href="#" className="text-white p-0">Talk to us</Nav.Link>
                <Nav.Link href="#" className="text-white p-0">Collab</Nav.Link>
              </Nav>
            </Col>
          </Row>
          <hr className="my-4" />
          <Row>
            <Col>
              <p className="small">Copyright ©2023 Red Sample</p>
            </Col>
            <Col className="text-end">
              <Nav className="justify-content-end">
                <Nav.Link href="#" className="text-white px-2 small">Privacy Policy</Nav.Link>
                <Nav.Link href="#" className="text-white px-2 small">Legal</Nav.Link>
                <Nav.Link href="#" className="text-white px-2 small">Terms & Conditions</Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default LandingPage;