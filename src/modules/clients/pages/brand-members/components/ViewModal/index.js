import React from "react";
import { Modal, Form, Button, Row, Col, Card } from "antd";
import PropTypes from "prop-types";

import "./index.css";

const ViewForm = Form.create()(props => {
  const { visible, onCancel } = props;

  return (
    <Modal
      className="add-modal"
      title="Rachelle Uy"
      visible={visible}
      onCancel={onCancel}
      footer={null}
    >
      <Row gutter={16}>
        <Row>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            Member ID
          </Col>
          <Col>1234567890</Col>
        </Row>

        <Row>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            Old ID
          </Col>
          <Col>000000</Col>
        </Row>

        <Row>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            Gender
          </Col>
          <Col>Male</Col>
        </Row>

        <Row>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            Birthday
          </Col>
          <Col>April 12, 1996</Col>
        </Row>

        <Row>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            Address
          </Col>
          <Col span={18}>
            226 Sunrise Condominium, Ortigas Extension, San Juan City, Metro
            Manila
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            Mobile
          </Col>
          <Col>09123456789</Col>
        </Row>

        <Row>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            Email
          </Col>
          <Col>sample@gmail.com</Col>
        </Row>

        <Row>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            Status
          </Col>
          <Col>Probitionary</Col>
        </Row>
      </Row>
      <Card style={{ background: "#F8FAFC", margin: "10px 0" }}>
        <Row>
          <Col span={24}>Company Details</Col>
        </Row>
        <Row>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            Hire Date
          </Col>
          <Col>February 15, 2018</Col>
        </Row>
        <Row>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            Position
          </Col>
          <Col>Web Developer</Col>
        </Row>
        <Row>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            Brand
          </Col>
          <Col>Mang Inasal</Col>
        </Row>
        <Row>
          <Col xs={24} sm={24} md={6} lg={6} xl={6}>
            Branch
          </Col>
          <Col>San Juan Ortigas</Col>
        </Row>
      </Card>
      <Card style={{ background: "#F8FAFC", margin: "10px 0" }}>
        <Row>
          <Col span={24}>Disciplinary Action</Col>
        </Row>
        <Row>
          <Col span={8}>April 12, 2018</Col>
          <Col span={8}>Resolved</Col>
          <Col span={8}>Tardiness</Col>
        </Row>
      </Card>
      <Button type="primary" style={{ width: "100%" }}>
        View Full Profile
      </Button>
    </Modal>
  );
});

ViewForm.propTypes = {
  footer: PropTypes.array
};

ViewForm.defaultProps = {
  footer: null
};

export default ViewForm;
