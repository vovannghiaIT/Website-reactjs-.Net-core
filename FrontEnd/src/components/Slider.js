import React, { Component } from "react";
import { Container, Row, Col, Carousel, Card } from "react-bootstrap";

export class slider extends Component {
  render() {
    return (
      <>
        <Container fluid="xxl" className="mt-4">
          <Row>
            <Col xs={8} className="px-0">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100 rounded-1 "
                    src="./img/sliderShop_1.png"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 rounded-1"
                    src="./img/sliderShop_2.png"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100 rounded-1"
                    src="./img/sliderShop_3.png"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col className="pe-0">
              <Row>
                <Col xs={12}>
                  <Card.Img
                    variant="top"
                    src="./img/sliderknShop.png"
                    className="mb-2 rounded-1"
                  />
                </Col>
                <Col>
                  <Card.Img
                    variant="top"
                    src="./img/sliderknShop_2.png"
                    className="rounded-1"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default slider;
