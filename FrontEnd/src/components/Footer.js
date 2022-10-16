import React, { Component } from "react";
import { Container, Row, Col, Card, Carousel, Button } from "react-bootstrap";
export class Footer extends Component {
  render() {
    return (
      <>
        <Container fluid="xxl" className="border__top">
          <Row>
            <Col>
              <h6 className="title">Thương hiệu</h6>
              <ul className="list-style">
                <li>
                  <a href="/">Ego wear</a>
                </li>
                <li>
                  <a href="/">Kroea</a>
                </li>
                <li>
                  <a href="/">Yoga</a>
                </li>
              </ul>
            </Col>
            <Col>
              <h6 className="title">Công ty</h6>
              <ul className="list-style">
                <li>
                  <a href="/">Về chúng tôi</a>
                </li>
                <li>
                  <a href="/">Sự nghiệp</a>
                </li>
                <li>
                  <a href="/">Quy tắc và điều khoản</a>
                </li>
                <li>
                  <a href="/">Sơ đồ trang web</a>
                </li>
              </ul>
            </Col>
            <Col>
              <h6 className="title">Trợ giúp</h6>
              <ul className="list-style">
                <li>
                  <a href="/">Liên hệ chúng tôi</a>
                </li>
                <li>
                  <a href="/">Chính sách hoàn tiền</a>
                </li>
                <li>
                  <a href="/">Tình trạng đặt hàng</a>
                </li>
                <li>
                  <a href="/">Thông tin vận chuyển</a>
                </li>
              </ul>
            </Col>
            <Col>
              <h6 className="title">Tài khoản</h6>
              <ul className="list-style">
                <li>
                  <a href="/">Đăng nhập </a>
                </li>
                <li>
                  <a href="/">Đăng ký </a>
                </li>
                <li>
                  <a href="/"> Thiết lập tài khoản</a>
                </li>
                <li>
                  <a href="/">Đơn hàng của tôi </a>
                </li>
              </ul>
            </Col>
            <Col>
              <h6 className="title">Xã hội</h6>
              <ul className="list-style">
                <li>
                  <a href="/">
                    <i className="fab fa-facebook"></i> Facebook
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fab fa-twitter"></i> Twitter
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fab fa-instagram"></i> Instagram
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fab fa-youtube"></i> Youtube
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Footer;
