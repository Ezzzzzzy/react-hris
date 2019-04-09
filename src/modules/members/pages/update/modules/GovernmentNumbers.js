import React from "react";
import { Col, Row, Input, Form } from "antd";

import "../index.css";

const FormItem = Form.Item;

const GovernmentNumbers = props => {
  const { member, getFieldDecorator } = props;

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
            ],
            initialValue: member.sss_num
          })(<Input placeholder="SSS Number" />)}
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
            ],
            initialValue: member.pag_ibig_num
          })(<Input placeholder="Pag-ibig Number" />)}
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
            ],
            initialValue: member.philhealth_num
          })(<Input placeholder="Philhealth Number" />)}
        </FormItem>
      </Col>
      <Col xl={12} md={12} sm={24} xs={24}>
        <FormItem label="TIN Number">
          {getFieldDecorator("tin", {
            initialValue: member.tin
          })(<Input placeholder="TIN Number" />)}
        </FormItem>
      </Col>
    </Row>
  );
};

export default GovernmentNumbers;
