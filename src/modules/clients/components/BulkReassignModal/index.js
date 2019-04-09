import React from "react";
import {
  Modal,
  Badge,
  Divider,
  Form,
  Select,
  Row,
  Col,
  Input,
  DatePicker,
  Card
} from "antd";

import "./index.css";

const { RangePicker } = DatePicker;
const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;

const ReassignForm = Form.create()(props => {
  const {
    form,
    visible,
    onCancel,
    onSave,
    onSelectClient,
    onSelectBrand,
    selectedClient,
    clientsOptions,
    brandOptions,
    branchOptions,
    positionOptions,
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
      form.resetFields();
      onSave(body);
    });
  };
  return (
    <Modal
      className="add-modal"
      title="Reassign Member"
      visible={visible}
      onOk={okHandle}
      onCancel={onCancel}
    >
      <Row gutter={16}>
        <Col xl={12} sm={24}>
          <Card style={{ minHeight: "267px", background: "#F8FAFC" }}>
            <Row>
              <div>
                <p>Members To Reassign:</p>
              </div>
              {selectedMembers.map((member, id) => (
                <Col key={id} span={24}>
                  <Badge status="default" text={member.full_name} />
                </Col>
              ))}
            </Row>
          </Card>
        </Col>
        <Col xl={12} sm={24}>
          <Form layout="vertical" onSubmit={okHandle}>
            <Row gutter={8}>
              <Col span={24}>
                <FormItem label="Date of End">
                  {form.getFieldDecorator("date_end")(
                    <DatePicker style={{ width: "100%" }} />
                  )}
                </FormItem>
              </Col>
              <Col span={24}>
                <FormItem label="Reasons for Leaving">
                  {form.getFieldDecorator("reasons_id", {
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
                <FormItem label="Remarks">
                  {form.getFieldDecorator("remarks", {})(<TextArea />)}
                </FormItem>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>

      <Divider type="horizontal" />

      <Row>
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
                    style={{ width: "100%" }}
                    placeholder="Client"
                    onChange={id => onSelectClient(id)}
                  >
                    {clientsOptions &&
                      clientsOptions.map(client => {
                        return (
                          <Option key={client.id} value={client.id}>
                            {client.client_name}
                          </Option>
                        );
                      })}
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
                  <Select style={{ width: "100%" }} placeholder="Branch">
                    {branchOptions &&
                      branchOptions.map(branch => (
                        <Option key={branch.id} value={branch.id}>
                          {branch.branch_name}
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
                    style={{ width: "100%" }}
                    placeholder="Brand"
                    onChange={brand_id =>
                      onSelectBrand({ client_id: selectedClient, brand_id })
                    }
                  >
                    {brandOptions &&
                      brandOptions.map(brand => {
                        return (
                          <Option key={brand.id} value={brand.id}>
                            {brand.brand_name}
                          </Option>
                        );
                      })}
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
                  <Select style={{ width: "100%" }} placeholder="Position">
                    {positionOptions &&
                      positionOptions
                        .filter(position => position.enabled === 1)
                        .map(position => {
                          return (
                            <Option key={position.id} value={position.id}>
                              {position.position_name}
                            </Option>
                          );
                        })}
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col xl={24} sm={24}>
              <Divider />
            </Col>
            <Col xl={15} sm={24}>
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
            <Col xl={9} sm={24}>
              <FormItem label="New Status">
                {form.getFieldDecorator("new_employment_status_id", {
                  rules: [
                    {
                      required: true,
                      message: "Please select new status"
                    }
                  ]
                })(
                  <Select style={{ width: "100%" }} placeholder="Status">
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
          </Row>
        </Form>
      </Row>
    </Modal>
  );
});

export default ReassignForm;
