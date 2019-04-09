import React from "react";
import { Col, Row, Input, Form } from "antd";

import "../index.css";

const FormItem = Form.Item;

const GovernmentNumbers = props => {
  const { getFieldDecorator } = props;

  return (
    <Row gutter={8}>
      <Col xl={12} md={12} sm={24} xs={24}>
        <FormItem label="SSS Number">
          {getFieldDecorator("sss_num", {
            rules: [
              {
                required: true,
                message: "SSS number is required"
              }
            ]
          })(<Input placeholder="SSS Number" maxLength={10} />)}
        </FormItem>
      </Col>
      <Col xl={12} md={12} sm={24} xs={24}>
        <FormItem label="Pag-ibig Number">
          {getFieldDecorator("pag_ibig_num", {
            rules: [
              {
                required: true,
                message: "Pag-ibig number is required"
              }
            ]
          })(<Input placeholder="Pag-ibig Number" maxLength={12} />)}
        </FormItem>
      </Col>

      <Col xl={12} md={12} sm={24} xs={24}>
        <FormItem label="Philhealth Number">
          {getFieldDecorator("philhealth_num", {
            rules: [
              {
                required: true,
                message: "Philhealth number is required"
              }
            ]
          })(<Input placeholder="Philhealth Number" maxLength={10} />)}
        </FormItem>
      </Col>
      <Col xl={12} md={12} sm={24} xs={24}>
        <FormItem label="TIN Number">
          {getFieldDecorator("tin")(
            <Input placeholder="TIN Number" maxLength={9} />
          )}
        </FormItem>
      </Col>
    </Row>
  );
};

export default GovernmentNumbers;
