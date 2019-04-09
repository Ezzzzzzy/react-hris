import React from "react";
import { Row, Col, Layout } from "antd";

const Footer = () => (
  <Layout.Footer>
    <Row>
      <Col
        xs={{ span: 24 }}
        sm={{ span: 24 }}
        md={{ span: 24 }}
        lg={{ span: 12 }}
      >
        {/* Copyright 2018 © PeopleServe. All rights reserved. */}
      </Col>
      <Col
        xs={{ span: 24 }}
        sm={{ span: 24 }}
        md={{ span: 24 }}
        lg={{ span: 11 }}
        className="footer-selection"
      />
    </Row>
  </Layout.Footer>
);

export default Footer;
