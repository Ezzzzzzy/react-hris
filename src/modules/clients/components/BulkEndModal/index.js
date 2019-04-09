import React from "react";
import {
  Modal,
  Badge,
  Form,
  Select,
  Row,
  Col,
  Input,
  DatePicker,
  Card
} from "antd";

import "./index.css";

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;

const BulkEndForm = Form.create()(props => {
  const {
    form,
    visible,
    onCancel,
    onSave,
    reasonOptions,
    statusOptions,
    selectedMembers,
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
      title="End Tenure of Member"
      visible={visible}
      onOk={okHandle}
      onCancel={onCancel}
    >
      <Row gutter={16}>
        <Col span={12}>
          <Card className="modal-member-list">
            <Row>
              <div>
                <p>Members To Resign:</p>
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
                <FormItem label="Date of End">
                  {form.getFieldDecorator("date_end", {
                    rules: [
                      { required: true, message: "Please input end date" }
                    ]
                  })(<DatePicker style={{ width: "100%" }} />)}
                </FormItem>
              </Col>
              <Col span={24}>
                <FormItem label="Reasons for Leaving">
                  {form.getFieldDecorator("reason_id", {
                    rules: [
                      {
                        required: true,
                        message: "Please select reasons for leaving"
                      }
                    ]
                  })(
                    <Select
                      style={{ width: "100%" }}
                      placeholder="Reasons for Leaving"
                    >
                      {reasonOptions &&
                        reasonOptions
                          .filter(reason => reason.enabled === 1)
                          .map(reason => (
                            <Option key={reason.id} value={reason.id}>
                              {reason.reason}
                            </Option>
                          ))}
                    </Select>
                  )}
                </FormItem>
              </Col>
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
                <FormItem label="Remarks">
                  {form.getFieldDecorator("reason_for_leaving_remarks", {})(
                    <TextArea />
                  )}
                </FormItem>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Modal>
  );
});

export default BulkEndForm;
