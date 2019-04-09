import React from "react";
import { Button, Col, Form, Input, Row, Select } from "antd";

import Modal from "../../../../../../commons/Modal";

const FormItem = Form.Item;
const { Option } = Select;

const CreateForm = Form.create()(props => {
  const { form, isLoading, user } = props;
  const { getFieldDecorator } = form;

  const okHandle = () => {
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      form.resetFields();
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
              ]
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
              ]
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
              initialValue: 1
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
        disabled={
          !props.verified(["view_add_and_modify_clients_branches_brands_bus"])
        }
      >
        Add New Client
      </Button>
    </Form>
  );
});

const Page = props => (
  <Modal
    visible={props.visible}
    onCancel={props.onCancel}
    title="Add New Client"
    content={
      <CreateForm
        handleSave={props.handleSave}
        verified={props.verified}
        isLoading={props.isLoading}
        user={props.user}
      />
    }
  />
);

export default Page;
