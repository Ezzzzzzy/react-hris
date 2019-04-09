import React, { Component } from "react";
import {
  Button,
  Col,
  DatePicker,
  Divider,
  Form,
  Row,
  Select,
  Spin
} from "antd";

const FormItem = Form.Item;
const Option = Select.Option;

class CreateForm extends Component {
  render() {
    const {
      branches,
      branchLoading,
      brands,
      form,
      clients,
      clientLoading,
      positions,
      statuses,
      member,
      user
    } = this.props;

    form.getFieldDecorator("employee_id", { initialValue: member.id });
    form.getFieldDecorator("last_modified_by", { initialValue: user.name });

    const okHandle = () => {
      form.validateFields((err, fieldsValue) => {
        if (err) return;
        let body = {
          ...fieldsValue,
          date_start: fieldsValue.date_start.format("YYYY-MM-DD"),
          date_end: fieldsValue.date_end
            ? fieldsValue.date_end.format("YYYY-MM-DD")
            : null
        };

        this.props.onSave(member.id, body);
      });
    };

    return (
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
              })(
                <Select
                  showSearch
                  notFoundContent={
                    clientLoading ? (
                      <center>
                        <Spin />
                      </center>
                    ) : null
                  }
                  placeholder="Select Client"
                  onChange={id => this.props.getBrands(id, {})}
                >
                  {clients &&
                    clients.map((item, i) => (
                      <Option value={item.id} key={i}>
                        {item.client_name}
                      </Option>
                    ))}
                </Select>
              )}
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
              })(
                <Select
                  showSearch
                  notFoundContent={
                    branchLoading ? (
                      <center>
                        <Spin />
                      </center>
                    ) : null
                  }
                  placeholder="Select Branch"
                  disabled={!form.getFieldValue("brand_id")}
                >
                  {branches.map((item, i) => (
                    <Option value={item.id} key={i}>
                      {item.branch_name}
                    </Option>
                  ))}
                </Select>
              )}
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
              })(
                <Select
                  showSearch
                  notFoundContent={
                    clientLoading ? (
                      <center>
                        <Spin />
                      </center>
                    ) : null
                  }
                  placeholder="Select Brand"
                  onChange={brand_id => {
                    const client_id = form.getFieldValue("client_id");
                    this.props.getBranches({ client_id, brand_id });
                  }}
                  disabled={!form.getFieldValue("client_id")}
                >
                  {brands &&
                    brands.map((item, i) => (
                      <Option value={item.id} key={i}>
                        {item.brand_name}
                      </Option>
                    ))}
                </Select>
              )}
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
                <Select
                  showSearch
                  notFoundContent={
                    clientLoading ? (
                      <center>
                        <Spin />
                      </center>
                    ) : null
                  }
                  placeholder="Select Position"
                >
                  {positions.map((item, i) => (
                    <Option value={item.id} key={i}>
                      {item.position_name}
                    </Option>
                  ))}
                </Select>
              )}
            </FormItem>
          </Col>
          <Col xl={24} sm={24}>
            <Divider />
          </Col>
          <Col xl={12} sm={24}>
            <FormItem label="Start Date">
              {form.getFieldDecorator("date_start", {
                rules: [
                  {
                    required: true,
                    message: "Please select date"
                  }
                ]
              })(<DatePicker style={{ width: "100%" }} />)}
            </FormItem>
          </Col>
          <Col xl={12} sm={24}>
            <FormItem label="End Date">
              {form.getFieldDecorator("date_end")(
                <DatePicker style={{ width: "100%" }} />
              )}
            </FormItem>
          </Col>
          <Col xl={12} sm={24}>
            <FormItem label="New Status">
              {form.getFieldDecorator("employment_status_id", {
                rules: [
                  {
                    required: true,
                    message: "Please select new status"
                  }
                ]
              })(
                <Select style={{ width: "100%" }} placeholder="Status">
                  {statuses.map((item, i) => (
                    <Option value={item.id} key={i}>
                      {item.status_name}
                    </Option>
                  ))}
                </Select>
              )}
            </FormItem>
          </Col>
        </Row>

        <Button type="primary" onClick={okHandle} style={{ width: "100%" }}>
          Update
        </Button>
      </Form>
    );
  }
}

export default Form.create()(CreateForm);
