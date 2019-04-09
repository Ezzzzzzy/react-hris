import React from "react";
import { Button, Col, Form, Input, Row, Select } from "antd";

import Modal from "../../../../../../commons/Modal";

const FormItem = Form.Item;
const { Option } = Select;

const UpdateForm = Form.create()(props => {
  const { form, data, user, isLoading } = props;
  const { getFieldDecorator } = form;

  const okHandle = () => {
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      props.handleSave(fieldsValue);
    });
  };

  form.getFieldDecorator("last_modified_by", { initialValue: user.name });

  return (
    <Form layout="vertical">
      <Row gutter={8}>
        <Col span={24}>
          <FormItem label="Company Name">
            {getFieldDecorator("client_name", {
              rules: [
                {
                  required: true,
                  message: "Please enter client name"
                }
              ],
              initialValue: data.name
            })(<Input placeholder="Client Name" />)}
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem label="Short Code">
            {getFieldDecorator("code", {
              rules: [
                {
                  required: true,
                  message: "Please enter code"
                }
              ],
              initialValue: data.code
            })(<Input placeholder="Code" />)}
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem label="Status">
            {getFieldDecorator("enabled", {
              rules: [
                {
                  required: true,
                  message: "Please select status"
                }
              ],
              initialValue: data.enabled
            })(
              <Select placeholder="Status">
                <Option value={1}>Enable</Option>
                <Option value={0}>Disable</Option>
              </Select>
            )}
          </FormItem>
        </Col>
      </Row>
      <Button
        type="primary"
        loading={isLoading}
        onClick={okHandle}
        style={{ width: "100%" }}
      >
        Update Client
      </Button>
    </Form>
  );
});

const Page = props => {
  return (
    <Modal
      visible={props.visible}
      onCancel={props.onCancel}
      title="Update New Client"
      content={
        <UpdateForm
          handleSave={props.handleSave}
          verified={props.verified}
          isLoading={props.isLoading}
          data={props.data}
          user={props.user}
        />
      }
    />
  );
};

export default Page;
