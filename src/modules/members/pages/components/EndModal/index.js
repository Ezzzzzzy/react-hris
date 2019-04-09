import React from "react";
import {
  Modal,
  Form,
  Select,
  Button,
  Row,
  Col,
  Input,
  DatePicker,
  Spin
} from "antd";

import "./index.css";

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;

const EndForm = Form.create()(props => {
  const {
    form,
    visible,
    onCancel,
    onSave,
    reasonOptions,
    statusOptions,
    cwhId,
    clientId,
    isLoading,
    memberId,
    user
  } = props;

  const statuses = statusOptions.filter(val => val.type === "inactive");

  form.getFieldDecorator("cwh_ids", { initialValue: cwhId });
  form.getFieldDecorator("last_modified_by", { initialValue: user.name });

  const okHandle = () => {
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      let body = {
        ...fieldsValue,
        date_end: fieldsValue["date_end"].format("YYYY-MM-DD")
      };
      onSave(clientId, body, memberId);
    });
  };

  return (
    <Modal
      className="add-modal"
      title="End Work"
      visible={visible}
      onCancel={onCancel}
      footer={null}
    >
      <Spin spinning={isLoading}>
        <Form layout="vertical">
          <Row gutter={8}>
            <Col span={24}>
              <FormItem label="Date of End">
                {form.getFieldDecorator("date_end", {
                  rules: [{ required: true, message: "Please input end date" }]
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
                      reasonOptions.map((reason, i) => {
                        return (
                          <Option value={reason.id} key={i}>
                            {reason.reason}
                          </Option>
                        );
                      })}
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col span={24}>
              <FormItem label="Remarks">
                {form.getFieldDecorator("reason_for_leaving_remarks", {
                  initialValue: ""
                })(<TextArea />)}
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
                      statuses.map((status, i) => {
                        return (
                          <Option value={status.id} key={i}>
                            {status.status_name}
                          </Option>
                        );
                      })}
                  </Select>
                )}
              </FormItem>
            </Col>
          </Row>
          <Button
            onClick={okHandle}
            type="primary"
            htmlType="submit"
            style={{ width: "100%" }}
          >
            Save
          </Button>
        </Form>
      </Spin>
    </Modal>
  );
});

export default EndForm;
