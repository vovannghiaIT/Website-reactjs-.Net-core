import React, { Component } from "react";
import Slider from "../components/Slider";
import Category from "../components/Category";
import Product from "../components/Product";

import Brand from "../components/Brand";
import { Container, Row, Col, Card, Carousel, Button } from "react-bootstrap";

export class Home extends Component {
  render() {
    return (
      <>
        <Container fluid="xxl" className="bg__body">
          <Slider />
          <Container fluid="xxl" className="mt-4 shadow-sm bg-white ">
            <Row>
              <Col className="p-4 home_hv " align="center">
                <Card.Img
                  variant="top"
                  src="./img/icon_category/icon_1.png"
                  className="mb-2 rounded-1 w-50 "
                />
                <p className="text-center">Khung giờ săn sale</p>
              </Col>
              <Col className="p-4 home_hv" align="center">
                <Card.Img
                  variant="top"
                  src="./img/icon_category/icon_2.png"
                  className="mb-2 rounded-1 w-50 "
                />
                <p className="text-center">Gì cũng rẻ</p>
              </Col>
              <Col className="p-4 home_hv" align="center">
                <Card.Img
                  variant="top"
                  src="./img/icon_category/icon_3.png"
                  className="mb-2 rounded-1 w-50 "
                />
                <p className="text-center">Miễn phí vận chuyển</p>
              </Col>
              <Col className="p-4 home_hv" align="center">
                <Card.Img
                  variant="top"
                  src="./img/icon_category/icon_4.png"
                  className="mb-2 rounded-1 w-50 "
                />
                <p className="text-center">Bắt trend- Giá sốc</p>
              </Col>
              <Col className="p-4 home_hv" align="center">
                <Card.Img
                  variant="top"
                  src="./img/icon_category/icon_5.png"
                  className="mb-2 rounded-1 w-50 "
                />
                <p className="text-center">Hoàn xu 6% - lên đến 200k</p>
              </Col>
              <Col className="p-4 home_hv" align="center">
                <Card.Img
                  variant="top"
                  src="./img/icon_category/icon_6.png"
                  className="mb-2 rounded-1 w-50 "
                />
                <p className="text-center">Hàng hiệu giá tốt</p>
              </Col>
              <Col className="p-4 home_hv" align="center">
                <Card.Img
                  variant="top"
                  src="./img/icon_category/icon_7.png"
                  className="mb-2 rounded-1 w-50 "
                />
                <p className="text-center">Hàng quốc tế Deal 9k</p>
              </Col>
              <Col className="p-4 home_hv" align="center">
                <Card.Img
                  variant="top"
                  src="./img/icon_category/icon_8.png"
                  className="mb-2 rounded-1 w-50 "
                />
                <p className="text-center">Nạp thẻ, Hóa đơn & Phim</p>
              </Col>
              <Col className="p-4 home_hv" align="center">
                <Card.Img
                  variant="top"
                  src="./img/icon_category/icon_9.png"
                  className="mb-2 rounded-1 w-50 "
                />
                <p className="text-center">Deal sốc từ 1k</p>
              </Col>
            </Row>
          </Container>
          <Card.Img
            variant="top"
            src="./img/icon_category/slider_QC.png"
            className="mb-2 rounded-1 w-100 my-4 "
          />
          <Category />
          <Container fluid="xxl" className="my-3 bg-white shadow-sm">
            <Row>
              <Col>
                <Card.Img
                  variant="top"
                  src="./img/QC_1.png"
                  className="mb-2 rounded-1 w-100  "
                />
              </Col>
            </Row>
          </Container>
          <Container fluid="xxl" className="my-3 bg-white shadow-sm">
            <Container fluid="xxl" className="py-2 border-bottom mb-2">
              <Row>
                <Col xs={1} className="px-1 text-danger">
                  SHOP MAIL
                </Col>
                <Col xs={2}>
                  <i className="fas fa-undo px-1 text-danger"></i> miễn phí trả
                  hàng
                </Col>
                <Col xs={2}>
                  <i className="fa-solid fa-check pe-1 text-danger"></i>Hàng
                  Chính Hãng 100%
                </Col>
                <Col xs={2}>
                  <i className="fa-solid fa-truck-moving px-1 text-danger"></i>
                  Miễn Phí Vận Chuyển
                </Col>
                <Col xs={5} className="px-0">
                  <Container>
                    <Row className="justify-content-end">
                      <Col xs={9}></Col>
                      <Col className="px-0 ">
                        Xem tất cả
                        <i className="bg-danger ms-1 p-1 fs_ms rounded-4  fa-solid fa-chevron-right text-white"></i>
                      </Col>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </Container>
            <Row>
              <Col xs={4}>
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="./img/slider_home_1.png"
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="./img/slider_Home_2.png"
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="./img/slider_Home_3.png"
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </Col>
              <Col xs={8}>
                <Brand />
              </Col>
            </Row>
          </Container>
          <Product />
          <Container fluid="xxl">
            <Row>
              <Col xs={5}> </Col>
              <Col>
                <Button className="my-2   btn__full">Xem Thêm</Button>
              </Col>
              <Col xs={5}></Col>
            </Row>
          </Container>
        </Container>
      </>
    );
  }
}

export default Home;
