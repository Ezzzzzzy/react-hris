import React from "react";
import { Modal, Badge, Form, Select, Row, Col, DatePicker, Card } from "antd";

import "./index.css";

const FormItem = Form.Item;
const Option = Select.Option;

const UpdateForm = Form.create()(props => {
  const {
    form,
    visible,
    onCancel,
    onSave,
    selectedMembers,
    statusOptions,
    user
  } = props;

  const okHandle = () => {
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      let body = {
        ...fieldsValue,
        last_modified_by: user.name
      };
      // form.resetFields();
      onSave(body);
    });
  };

  return (
    <Modal
      className="add-modal"
      title="Update Status of Member"
      visible={visible}
      onOk={okHandle}
      onCancel={onCancel}
    >
      <Row gutter={16}>
        <Col span={12}>
          <Card style={{ minHeight: "247px", background: "#F8FAFC" }}>
            <Row>
              <div>
                <p>Members To Update:</p>
              </div>
              <div className="checkbox-container">
                {selectedMembers.map((member, id) => (
                  <Col key={id} span={24}>
                    <Badge status="default" text={member.full_name} />
                  </Col>
                ))}
              </div>
            </Row>
          </Card>
        </Col>
        <Col span={12}>
          <Form layout="vertical" onSubmit={okHandle}>
            <Row gutter={8}>
              <Col span={24}>
                <FormItem label="New Status">
                  {form.getFieldDecorator("employment_status_id", {
                    rules: [
                      {
                        required: true,
                        message: "Please select status"
                      }
                    ]
                  })(
                    <Select style={{ width: "100%" }} placeholder="New Status">
                      {statusOptions &&
                        statusOptions
                          .filter(status => status.enabled === 1)
                          .map(status => (
                            <Option key={status.id} value={status.id}>
                              {status.status_name}
                            </Option>
                          ))}
                    </Select>
                  )}
                </FormItem>
              </Col>
              <Col span={24}>
                <FormItem label="Start Date">
                  {form.getFieldDecorator("date_start", {
                    rules: [
                      { required: true, message: "Please input start date" }
                    ]
                  })(<DatePicker style={{ width: "100%" }} />)}
                </FormItem>
              </Col>
              <Col span={24}>
                <FormItem label="End Date">
                  {form.getFieldDecorator("date_end", {
                    rules: [{ required: false }]
                  })(<DatePicker style={{ width: "100%" }} />)}
                </FormItem>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Modal>
  );
});

export default UpdateForm;
