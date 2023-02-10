import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";


const AppFooter = () => {
  return (
    <div>
      <footer className="bg-light py-3">
        <Container>
          <Row className="justify-content-center">
            <Col lg={3} md={6} sm={12}>
              <h5 className="text-uppercase font-weight-bold">About Us</h5>
              <p className="text-secondary">
               This is a dummy E-Commerce App.
              </p>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <h5 className="text-uppercase font-weight-bold">Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <Link className="my-link" to="/">Home</Link>
                </li>
                <li>
                  <Link className="my-link" to="/cart">My Cart</Link>
                </li>
                <li>
                  <Link className="my-link" to="/checkout">Checkout</Link>
                </li>
              </ul>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <h5 className="text-uppercase font-weight-bold">Contact Us</h5>
              <ul className="list-unstyled">
                <li>
                  <a className="my-link">Email: chetan99sharma.cs@gmail.com</a>
                </li>
                <li>
                  <a className="my-link" >Phone: +91-7728910628</a>
                </li>
              </ul>
            </Col>
          </Row>
          <hr />
          <Row className="justify-content-center">
            <Col xs={12} className="text-center">
              <p className="text-secondary">
                Copyright &copy; Chetan Sharma {new Date().getFullYear()}
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default AppFooter;
