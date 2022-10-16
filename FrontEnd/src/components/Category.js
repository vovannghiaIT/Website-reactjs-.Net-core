import React, { Component, useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
// import { Carousel } from "react-responsive-carousel";
import Slider from "react-slick";
import { getCategoryAPi } from "../api/category";
//import { getCategoryapi } from "../api/addapi";
const Category = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [category, setCategory] = useState([]);

  //
  //const data = [];

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setCategory(await getCategoryAPi());
  };
  // const fetchData = async () => {
  //   const data = getCategoryAPi();
  //   console.log(data);
  // };

  return (
    <>
      <Container fluid="xxl mt-4 px-0  bg-white position-relative  ">
        <p className="pt-3  px-4 fs-5 mb-0 text-black opacity-50">DANH MỤC</p>

        <Container fluid="xxl px-0">
          <Slider
            asNavFor={nav1}
            ref={(c) => setNav1(c)}
            slidesToShow={4}
            slidesToScroll={1}
            autoplaySpeed={2000}
            autoplay={2000}
            speed={2000}
            rows={2}
            infinite={true}
            slidesPerRow={2}
            swipeToSlide={true}
            focusOnSelect={true}
            arrows={false}
          >
            {category?.map((item, key) => (
              <div key={key}>
                <h3>
                  <div className="w-75 " align="center">
                    <Row xs={1}>
                      <Col className="hv_border">
                        <Card.Img
                          variant="top"
                          src="./img/Category/cate_1.png"
                          className="mb-2 rounded-1 w-100  "
                        />
                        <p className="text-center fs__ms">{item.name}</p>
                      </Col>
                    </Row>
                  </div>
                </h3>
              </div>
            ))}
            {category?.map((item, key) => (
              <div key={key}>
                <h3>
                  <div className="w-75 " align="center">
                    <Row xs={1}>
                      <Col className="hv_border">
                        <Card.Img
                          variant="top"
                          src="./img/Category/cate_1.png"
                          className="mb-2 rounded-1 w-100  "
                        />
                        <p className="text-center fs__ms">{item.name}</p>
                      </Col>
                    </Row>
                  </div>
                </h3>
              </div>
            ))}
            {category?.map((item, key) => (
              <div key={key}>
                <h3>
                  <div className="w-75 " align="center">
                    <Row xs={1}>
                      <Col className="hv_border">
                        <Card.Img
                          variant="top"
                          src="./img/Category/cate_1.png"
                          className="mb-2 rounded-1 w-100  "
                        />
                        <p className="text-center fs__ms">{item.name}</p>
                      </Col>
                    </Row>
                  </div>
                </h3>
              </div>
            ))}
          </Slider>
        </Container>
      </Container>
      <Container fluid="xxl mt-4 px-0  bg-white position-relative shadow-sm ">
        <Container fluid="xxl pt-3">
          <Row>
            <Col xs={2}>
              <p className="  px-4 fs-5 mb-1 text-danger fw-500 py-1">
                FLASH SALE
              </p>
            </Col>
            <Col xs={9}></Col>
            <Col className="px-0 text-danger">
              Xem tất cả
              <i className=" px-1 fa-solid fa-chevron-right text-danger"></i>
            </Col>
          </Row>
        </Container>
        <Container fluid="xxl px-0">
          <Slider
            asNavFor={nav2}
            ref={(c) => setNav2(c)}
            speed={2000}
            slidesToScroll={1}
            autoplaySpeed={2000}
            autoplay={2000}
            slidesToShow={6}
            swipeToSlide={true}
            focusOnSelect={true}
            arrows={false}
          >
            <div>
              <h3>
                <div className=" border-2">
                  <Row xs={1}>
                    <Col>
                      <Card.Img
                        variant="top"
                        src="./img/Product/quat.png"
                        className="mb-2 rounded-1 w-100  "
                      />
                      <div className="px-2 py-1 fs-5" align="center">
                        <sup className="text-danger me-1 ">đ</sup>
                        <span className="text-danger">2.000.0000</span>
                        <p className="mt-2 rounded-pill  w-75  fs-6 text-center bg-danger opacity-50">
                          ĐÃ BÁN 0
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </h3>
            </div>
            <div>
              <h3>
                <div className=" border-2">
                  <Row xs={1}>
                    <Col>
                      <Card.Img
                        variant="top"
                        src="./img/Product/quat.png"
                        className="mb-2 rounded-1 w-100"
                      />
                      <div className="px-2 py-1 fs-5" align="center">
                        <sup className="text-danger me-1 ">đ</sup>
                        <span className="text-danger">2.000.0000</span>
                        <p className="mt-2 rounded-pill  w-75  px-1 fs-6 text-center bg-danger opacity-50">
                          ĐÃ BÁN 0
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </h3>
            </div>
            <div>
              <h3>
                <div className=" border-2">
                  <Row xs={1}>
                    <Col>
                      <Card.Img
                        variant="top"
                        src="./img/Product/quat.png"
                        className="mb-2 rounded-1 w-100  "
                      />
                      <div className="px-2 py-1 fs-5" align="center">
                        <sup className="text-danger me-1 ">đ</sup>
                        <span className="text-danger">2.000.0000</span>
                        <p className="mt-2 rounded-pill  w-75  px-1 fs-6 text-center bg-danger opacity-50">
                          ĐÃ BÁN 0
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </h3>
            </div>
            <div>
              <h3>
                <div className=" border-2">
                  <Row xs={1}>
                    <Col>
                      <Card.Img
                        variant="top"
                        src="./img/Product/quat.png"
                        className="mb-2 rounded-1 w-100  "
                      />
                      <div className="px-2 py-1 fs-5" align="center">
                        <sup className="text-danger me-1 ">đ</sup>
                        <span className="text-danger">2.000.0000</span>
                        <p className="mt-2 rounded-pill  w-75  px-1 fs-6 text-center bg-danger opacity-50">
                          ĐÃ BÁN 0
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </h3>
            </div>
            <div>
              <h3>
                <div className=" border-2">
                  <Row xs={1}>
                    <Col>
                      <Card.Img
                        variant="top"
                        src="./img/Product/quat.png"
                        className="mb-2 rounded-1 w-100  "
                      />
                      <div className="px-2 py-1 fs-5" align="center">
                        <sup className="text-danger me-1 ">đ</sup>
                        <span className="text-danger">2.000.0000</span>
                        <p className="mt-2 rounded-pill  w-75  px-1 fs-6 text-center bg-danger opacity-50">
                          ĐÃ BÁN 0
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </h3>
            </div>
            <div>
              <h3>
                <div className=" border-2">
                  <Row xs={1}>
                    <Col>
                      <Card.Img
                        variant="top"
                        src="./img/Product/quat.png"
                        className="mb-2 rounded-1 w-100  "
                      />
                      <div className="px-2 py-1 fs-5" align="center">
                        <sup className="text-danger me-1 ">đ</sup>
                        <span className="text-danger">2.000.0000</span>
                        <p className="mt-2 rounded-pill  w-75  px-1 fs-6 text-center bg-danger opacity-50">
                          ĐÃ BÁN 0
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </h3>
            </div>
            <div>
              <h3>
                <div className=" border-2">
                  <Row xs={1}>
                    <Col>
                      <Card.Img
                        variant="top"
                        src="./img/Product/quat.png"
                        className="mb-2 rounded-1 w-100  "
                      />
                      <div className="px-2 py-1 fs-5" align="center">
                        <sup className="text-danger me-1 ">đ</sup>
                        <span className="text-danger">2.000.0000</span>
                        <p className="mt-2 rounded-pill  w-75  px-1 fs-6 text-center bg-danger opacity-50">
                          ĐÃ BÁN 0
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </h3>
            </div>
          </Slider>
        </Container>
      </Container>
    </>
  );
};

export default Category;
