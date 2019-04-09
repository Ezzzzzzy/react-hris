import React from "react";
import {
  Modal,
  Form,
  Select,
  Button,
  Row,
  Col,
  Divider,
  DatePicker
} from "antd";

import moment from "moment";
import "./index.css";

const FormItem = Form.Item;
const { RangePicker } = DatePicker;
const Option = Select.Option;

const CreateForm = Form.create()(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;

      return (
        <Modal
          className="add-modal"
          visible={visible}
          title="Add New Deployment"
          okText="Update"
          onCancel={onCancel}
          footer={[
            <Button key="submit" type="primary" onClick={onCreate}>
              Update
            </Button>
          ]}
        >
          <Form layout="vertical">
            <Row gutter={16}>
              <Col xl={12} sm={24}>
                <FormItem label="Client">
                  {form.getFieldDecorator("client_id", {
                    rules: [
                      {
                        required: true,
                        message: "Please select client"
                      }
                    ]
                  })(<Select style={{ width: "100%" }} placeholder="Client" />)}
                </FormItem>
              </Col>
              <Col xl={12} sm={24}>
                <FormItem label="Branch">
                  {form.getFieldDecorator("branch_id", {
                    rules: [
                      {
                        required: true,
                        message: "Please select branch"
                      }
                    ]
                  })(<Select style={{ width: "100%" }} placeholder="Branch" />)}
                </FormItem>
              </Col>
              <Col xl={12} sm={24}>
                <FormItem label="Brand">
                  {form.getFieldDecorator("brand_id", {
                    rules: [
                      {
                        required: true,
                        message: "Please select brand"
                      }
                    ]
                  })(<Select style={{ width: "100%" }} placeholder="Brand" />)}
                </FormItem>
              </Col>
              <Col xl={12} sm={24}>
                <FormItem label="New Position">
                  {form.getFieldDecorator("position_id", {
                    rules: [
                      {
                        required: true,
                        message: "Please select new position"
                      }
                    ]
                  })(
                    <Select style={{ width: "100%" }} placeholder="Position" />
                  )}
                </FormItem>
              </Col>
              <Col xl={24} sm={24}>
                <Divider />
              </Col>
              <Col xl={24} sm={24}>
                <FormItem label="Start and End Date">
                  {form.getFieldDecorator("dates", {
                    rules: [
                      {
                        required: true,
                        message: "Please select date"
                      }
                    ]
                  })(<RangePicker style={{ width: "100%" }} />)}
                </FormItem>
              </Col>
              <Col xl={12} sm={24}>
                <FormItem label="New Status">
                  {form.getFieldDecorator("status_id", {
                    rules: [
                      {
                        required: true,
                        message: "Please select new status"
                      }
                    ]
                  })(<Select style={{ width: "100%" }} placeholder="Status" />)}
                </FormItem>
              </Col>
            </Row>
          </Form>
        </Modal>
      );
    }
  }
);

export default CreateForm;
