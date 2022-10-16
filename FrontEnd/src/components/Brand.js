import React, { Component } from "react";
import Slider from "react-slick";
import { Container, Card, Row, Col } from "react-bootstrap";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}
export class Brand extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToScroll: 2,
      slidesToShow: 2,
      speed: 1500,
      autoplaySpeed: 3000,
      autoplay: 700,
      rows: 2,
      slidesPerRow: 2,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <>
        <Slider {...settings}>
          <div>
            <h3>
              <div className="w-75 " align="center">
                <Row xs={1}>
                  <Col className="hv_border">
                    <Card.Img
                      variant="top"
                      src="./img/Brand/brand_1.png"
                      className=" rounded-1 w-100  "
                    />
                    <p className="text-center fs__ms">Mua là có quà</p>
                  </Col>
                </Row>
              </div>
            </h3>
          </div>
          <div>
            <h3>
              <div className="w-75 " align="center">
                <Row xs={1}>
                  <Col className="hv_border">
                    <Card.Img
                      variant="top"
                      src="./img/Brand/brand_1.png"
                      className=" rounded-1 w-100  "
                    />
                    <p className="text-center fs__ms">Mua là có quà</p>
                  </Col>
                </Row>
              </div>
            </h3>
          </div>
          <div>
            <h3>
              <div className="w-75 " align="center">
                <Row xs={1}>
                  <Col className="hv_border">
                    <Card.Img
                      variant="top"
                      src="./img/Brand/brand_1.png"
                      className=" rounded-1 w-100  "
                    />
                    <p className="text-center fs__ms">Mua là có quà</p>
                  </Col>
                </Row>
              </div>
            </h3>
          </div>
          <div>
            <h3>
              <div className="w-75 " align="center">
                <Row xs={1}>
                  <Col className="hv_border">
                    <Card.Img
                      variant="top"
                      src="./img/Brand/brand_1.png"
                      className=" rounded-1 w-100  "
                    />
                    <p className="text-center fs__ms">Mua là có quà</p>
                  </Col>
                </Row>
              </div>
            </h3>
          </div>
          <div>
            <h3>
              <div className="w-75 " align="center">
                <Row xs={1}>
                  <Col className="hv_border">
                    <Card.Img
                      variant="top"
                      src="./img/Brand/brand_1.png"
                      className=" rounded-1 w-100  "
                    />
                    <p className="text-center fs__ms">Mua là có quà</p>
                  </Col>
                </Row>
              </div>
            </h3>
          </div>
          <div>
            <h3>
              <div className="w-75 " align="center">
                <Row xs={1}>
                  <Col className="hv_border">
                    <Card.Img
                      variant="top"
                      src="./img/Brand/brand_1.png"
                      className=" rounded-1 w-100  "
                    />
                    <p className="text-center fs__ms">Mua là có quà</p>
                  </Col>
                </Row>
              </div>
            </h3>
          </div>
          <div>
            <h3>
              <div className="w-75 " align="center">
                <Row xs={1}>
                  <Col className="hv_border">
                    <Card.Img
                      variant="top"
                      src="./img/Brand/brand_1.png"
                      className=" rounded-1 w-100  "
                    />
                    <p className="text-center fs__ms">Mua là có quà</p>
                  </Col>
                </Row>
              </div>
            </h3>
          </div>
          <div>
            <h3>
              <div className="w-75 " align="center">
                <Row xs={1}>
                  <Col className="hv_border">
                    <Card.Img
                      variant="top"
                      src="./img/Brand/brand_1.png"
                      className=" rounded-1 w-100  "
                    />
                    <p className="text-center fs__ms">Mua là có quà</p>
                  </Col>
                </Row>
              </div>
            </h3>
          </div>
          <div>
            <h3>
              <div className="w-75 " align="center">
                <Row xs={1}>
                  <Col className="hv_border">
                    <Card.Img
                      variant="top"
                      src="./img/Brand/brand_1.png"
                      className=" rounded-1 w-100  "
                    />
                    <p className="text-center fs__ms">Mua là có quà</p>
                  </Col>
                </Row>
              </div>
            </h3>
          </div>
          <div>
            <h3>
              <div className="w-75 " align="center">
                <Row xs={1}>
                  <Col className="hv_border">
                    <Card.Img
                      variant="top"
                      src="./img/Brand/brand_1.png"
                      className=" rounded-1 w-100  "
                    />
                    <p className="text-center fs__ms">Mua là có quà</p>
                  </Col>
                </Row>
              </div>
            </h3>
          </div>
          <div>
            <h3>
              <div className="w-75 " align="center">
                <Row xs={1}>
                  <Col className="hv_border">
                    <Card.Img
                      variant="top"
                      src="./img/Brand/brand_1.png"
                      className=" rounded-1 w-100  "
                    />
                    <p className="text-center fs__ms">Mua là có quà</p>
                  </Col>
                </Row>
              </div>
            </h3>
          </div>
          <div>
            <h3>
              <div className="w-75 " align="center">
                <Row xs={1}>
                  <Col className="hv_border">
                    <Card.Img
                      variant="top"
                      src="./img/Brand/brand_1.png"
                      className=" rounded-1 w-100  "
                    />
                    <p className="text-center fs__ms">Mua là có quà</p>
                  </Col>
                </Row>
              </div>
            </h3>
          </div>
          <div>
            <h3>
              <div className="w-75 " align="center">
                <Row xs={1}>
                  <Col className="hv_border">
                    <Card.Img
                      variant="top"
                      src="./img/Brand/brand_1.png"
                      className=" rounded-1 w-100  "
                    />
                    <p className="text-center fs__ms">Mua là có quà</p>
                  </Col>
                </Row>
              </div>
            </h3>
          </div>
          <div>
            <h3>
              <div className="w-75 " align="center">
                <Row xs={1}>
                  <Col className="hv_border">
                    <Card.Img
                      variant="top"
                      src="./img/Brand/brand_1.png"
                      className=" rounded-1 w-100  "
                    />
                    <p className="text-center fs__ms">Mua là có quà</p>
                  </Col>
                </Row>
              </div>
            </h3>
          </div>
          <div>
            <h3>
              <div className="w-75 " align="center">
                <Row xs={1}>
                  <Col className="hv_border">
                    <Card.Img
                      variant="top"
                      src="./img/Brand/brand_1.png"
                      className=" rounded-1 w-100  "
                    />
                    <p className="text-center fs__ms">Mua là có quà</p>
                  </Col>
                </Row>
              </div>
            </h3>
          </div>
          <div>
            <h3>
              <div className="w-75 " align="center">
                <Row xs={1}>
                  <Col className="hv_border">
                    <Card.Img
                      variant="top"
                      src="./img/Brand/brand_1.png"
                      className=" rounded-1 w-100  "
                    />
                    <p className="text-center fs__ms">Mua là có quà</p>
                  </Col>
                </Row>
              </div>
            </h3>
          </div>
          <div>
            <h3>
              <div className="w-75 " align="center">
                <Row xs={1}>
                  <Col className="hv_border">
                    <Card.Img
                      variant="top"
                      src="./img/Brand/brand_1.png"
                      className=" rounded-1 w-100  "
                    />
                    <p className="text-center fs__ms">Mua là có quà</p>
                  </Col>
                </Row>
              </div>
            </h3>
          </div>
          <div>
            <h3>
              <div className="w-75 " align="center">
                <Row xs={1}>
                  <Col className="hv_border">
                    <Card.Img
                      variant="top"
                      src="./img/Brand/brand_1.png"
                      className=" rounded-1 w-100  "
                    />
                    <p className="text-center fs__ms">Mua là có quà</p>
                  </Col>
                </Row>
              </div>
            </h3>
          </div>
          <div>
            <h3>
              <div className="w-75 " align="center">
                <Row xs={1}>
                  <Col className="hv_border">
                    <Card.Img
                      variant="top"
                      src="./img/Brand/brand_1.png"
                      className=" rounded-1 w-100  "
                    />
                    <p className="text-center fs__ms">Mua là có quà</p>
                  </Col>
                </Row>
              </div>
            </h3>
          </div>
          <div>
            <h3>
              <div className="w-75 " align="center">
                <Row xs={1}>
                  <Col className="hv_border">
                    <Card.Img
                      variant="top"
                      src="./img/Brand/brand_1.png"
                      className=" rounded-1 w-100  "
                    />
                    <p className="text-center fs__ms">Mua là có quà</p>
                  </Col>
                </Row>
              </div>
            </h3>
          </div>
        </Slider>
      </>
    );
  }
}

export default Brand;
