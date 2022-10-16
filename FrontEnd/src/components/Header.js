import React, { Component } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { GiSelfLove } from "react-icons/gi";
import { BsCart3 } from "react-icons/bs";
import Nav from "./Nav";
import { Link, NavLink } from "react-router-dom";

import "../assets/css/style.css";
import { Col, Row, Container, ListGroup } from "react-bootstrap";
export class Header extends Component {
  render() {
    return (
      <>
        <div className="header__bg ">
          <Container fluid="xxl">
            <Row>
              <Col xs={5}>
                <ListGroup horizontal>
                  <ListGroup.Item className="border-0 bg-transparent  text-white py-1 px-1">
                    Kênh người bán
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0 bg-transparent text-white py-1 px-1">
                    Trở thành người bán
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0 bg-transparent text-white py-1 px-1">
                    Tải ứng dụng
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0 bg-transparent text-white py-1 px-1">
                    Kết nối
                    <i className="fa-brands fa-facebook px-2"></i>
                    <i className="fa-brands fa-instagram"></i>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col xs={2}></Col>
              <Col xs={5}>
                <ListGroup horizontal>
                  <ListGroup.Item className="border-0 bg-transparent  text-white py-1 px-2">
                    <span>
                      <i className="fa-regular fa-bell"></i>Thông báo
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0 bg-transparent text-white py-1 px-2">
                    <span>
                      <i className="fa-brands fa-whatsapp"></i>Hỗ trợ
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0 bg-transparent text-white py-1 px-2">
                    <span>
                      <i className="fa-solid fa-globe"></i>
                      Tiếng việt
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0 bg-transparent text-white py-1 px-2">
                    <span className="border-2 border-end px-2 ">Đăng ký</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0 bg-transparent text-white py-1 ps-0 pe-2">
                    Đăng nhập
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Container>
          <Nav />
        </div>
      </>
    );
  }
}

export default Header;
