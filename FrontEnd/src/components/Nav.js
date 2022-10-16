import React, { Component } from "react";
// import "../assets/css/style.css";
import {
  Col,
  Row,
  Container,
  Card,
  Form,
  InputGroup,
  ListGroup,
} from "react-bootstrap";
import logo from "../assets/images/logoshop.png";
export class Nav extends Component {
  render() {
    return (
      <>
        <Container fluid="xxl">
          <Row>
            <Col xs={2} className="px-4 py-2 text-center text-white fs-2 ">
              SHOP
            </Col>
            <Col xs={8} className="px-2 ">
              <InputGroup className=" mt-2 px-2 rounded-1">
                <Form.Control
                  aria-label="Amount (to the nearest dollar)"
                  placeholder="Tìm kiếm sản phẩm"
                />
                <InputGroup.Text className="p-0 rounded-1 bg-white border-0">
                  <i className="fa fa-search px-3 py-2 rounded-1 m-1 bg__search"></i>
                </InputGroup.Text>
              </InputGroup>
              <Container className="mt-1">
                <Row>
                  <Col className="px-2">
                    <ListGroup horizontal>
                      <ListGroup.Item className="border-0 bg-transparent  text-white pt-1 fs__ms p-0 ">
                        Áo khoác
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-transparent text-white pt-1 fs__ms pe-1 ">
                        Dép
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-transparent text-white pt-1 fs__ms pe-1 ">
                        Túi Xách nữ
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-transparent text-white pt-1 fs__ms pe-1 ">
                        Váy
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-transparent text-white pt-1 fs__ms pe-1 ">
                        Balo
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-transparent text-white pt-1 fs__ms pe-1 ">
                        Quần Jean Nam
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-transparent text-white pt-1 fs__ms pe-1 ">
                        Tai nghe Bluetooth
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col>
              <i className="fas fa-shopping-cart text-white p-4 fs-4"></i>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Nav;
