import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  Row,
  Col,
  Avatar,
  Card,
  Icon,
  Divider,
  Button,
  Form,
  Input,
  Select,
  Tooltip
} from "antd";

import "./index.css";
import AddBusinessUnitModal from "../../../../commons/Modal";
import EditClientModal from "../../../../commons/Modal";
import AddBranchModal from "../../../../commons/Modal";

const FormItem = Form.Item;
const Option = Select.Option;
class SideBar extends Component {
  state = {
    addBusinessUnitModal: false,
    editClientModal: false,
    addBranch: false,

    selectedBuId: null
  };

  showAddBu = () => this.setState({ addBusinessUnitModal: true });

  showEditClient = () => this.setState({ editClientModal: true });

  showAddBranch = selectedBuId =>
    this.setState({ addBranch: true, selectedBuId });

  handleClose = () =>
    this.setState({
      addBusinessUnitModal: false,
      editClientModal: false,
      addBranch: false
    });

  handleAddBu = fields => {
    let data = {
      ...fields,
      last_modified_by: "Neil Nato"
    };
    this.props.onCreateBusinessUnit(this.props.client_id, data);
  };

  handleEditClient = fields => {
    let data = {
      ...fields,
      last_modified_by: "Neil Nato"
    };
    this.props.onUpdateClient(this.props.client_id, data);
  };

  handleAddBrand = fields => {
    let data = {
      ...fields,
      business_unit_id: this.state.selectedBuId,
      last_modified_by: "Neil Nato"
    };
    this.props.onCreateBrand(this.props.client_id, data);
  };

  verified = permission => {
    let verified = [];
    permission = !Array.isArray(permission) ? [permission] : permission;
    permission.forEach(val => {
      if (this.props.permissions.map(val => val.name).indexOf(val) !== -1) {
        verified.push(1);
      } else verified.push(0);
    });

    return verified.indexOf(1) !== -1 ? true : false;
  };

  render() {
    const {
      code,
      name,
      enabled,
      members_count,
      brands_count,
      bu_data,
      isLoading
    } = this.props;

    const CreateBusinessUnit = Form.create()(props => {
      const { form } = props;
      const { getFieldDecorator } = form;

      const okHandle = () => {
        form.validateFields((err, fieldsValue) => {
          if (err) return;
          form.resetFields();
          props.onSave(fieldsValue);
        });
      };
      return (
        <Form layout="vertical">
          <Row gutter={8}>
            <Col span={24}>
              <FormItem label="Business Unit">
                {getFieldDecorator("business_unit_name", {
                  rules: [
                    {
                      required: true,
                      message: "Please enter business unit"
                    }
                  ]
                })(<Input placeholder="Business Unit" />)}
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
                  ]
                })(
                  <Select placeholder="Status">
                    <Option value={1}>Enabled</Option>
                    <Option value={0}>Disabled</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
          </Row>
          <Tooltip
            placement="topRight"
            title={
              !this.verified(
                "view_add_and_modify_clients_branches_brands_bus"
              ) && "You don't have any permission"
            }
          >
            <Button
              type="primary"
              onClick={okHandle}
              loading={isLoading}
              disabled={
                !this.verified(
                  "view_add_and_modify_clients_branches_brands_bus"
                )
              }
              block
            >
              Add Business Unit
            </Button>
          </Tooltip>
        </Form>
      );
    });

    const UpdateClient = Form.create()(props => {
      const { form, data } = props;
      const { getFieldDecorator } = form;

      const okHandle = () => {
        form.validateFields((err, fieldsValue) => {
          if (err) return;
          // form.resetFields()
          props.onSave(fieldsValue);
        });
      };
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

    const CreateBrand = Form.create()(props => {
      const { form } = props;
      const { getFieldDecorator } = form;

      const okHandle = () => {
        form.validateFields((err, fieldsValue) => {
          if (err) return;
          form.resetFields();
          props.onSave(fieldsValue);
        });
      };
      return (
        <Form layout="vertical">
          <Row gutter={8}>
            <Col span={24}>
              <FormItem label="Business Unit">
                {getFieldDecorator("business_unit_id", {
                  rules: [
                    {
                      required: true,
                      message: "Please select a Business Unit"
                    }
                  ]
                })(
                  <Select
                    placeholder="Business Unit"
                    showSearch
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.props.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    {bu_data &&
                      bu_data.map((bu, i) => {
                        return (
                          <Option key={i} value={bu.id}>
                            {bu.business_unit_name}
                          </Option>
                        );
                      })}
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col span={24}>
              <FormItem label="Brand Name">
                {getFieldDecorator("brand_name", {
                  rules: [
                    {
                      required: true,
                      message: "Please enter brand name"
                    }
                  ]
                })(<Input placeholder="Brand" />)}
              </FormItem>
            </Col>
            <Col span={24}>
              <FormItem label="Status">
                {getFieldDecorator("enabled", {
                  rules: [
                    {
                      required: true,
                      message: "Please select status"
                    }
                  ]
                })(
                  <Select placeholder="Status">
                    <Option value={1}>Enable</Option>
                    <Option value={0}>Disable</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
          </Row>
          <Button type="primary" onClick={okHandle} loading={isLoading} block>
            Add Brand
          </Button>
        </Form>
      );
    });

    return (
      <Row>
        <Row>
          <Card className="sidebar-clientName-card">
            <Col span={6}>
              <Avatar
                size="large"
                icon="solution"
                style={{ backgroundColor: "#E74C3C" }}
              />
            </Col>
            <Col span={18}>
              <h2>
                {code}
                <Icon
                  type="form"
                  style={{ marginLeft: "6px", fontSize: "10px" }}
                  onClick={() => this.showEditClient()}
                />
              </h2>
              <h6>{name}</h6>
            </Col>
          </Card>
        </Row>
        <Row className="sidebar-content">
          <Divider style={{ background: "#2A3547", margin: "12px 0 12px" }} />

          <div className="sidebar-bu-list">
            {bu_data &&
              bu_data
                .filter((bu, i) => bu.member_count !== 0)
                .map((bu, i) => (
                  <div key={i}>
                    <div className="sidebar-bu">
                      {`${bu.business_unit_name} (${bu.member_count})`}{" "}
                      <Icon
                        className="pull-right"
                        type="plus-circle"
                        onClick={() => this.showAddBranch(bu.id)}
                      />
                    </div>
                    {bu.brands &&
                      bu.brands.map((brand, i) => {
                        return (
                          <Row key={i}>
                            <NavLink
                              to={`/client/${this.props.client_id}/brand/${
                                brand.id
                              }`}
                            >
                              <Col span={19}>
                                <p className="sidebar-brand">
                                  {brand.brand_name}
                                </p>
                              </Col>
                              <Col span={5}>
                                <p
                                  className="sidebar-count"
                                  style={{ textAlign: "right" }}
                                >
                                  {brand.member_count || "0"}
                                </p>
                              </Col>
                            </NavLink>
                          </Row>
                        );
                      })}
                    <Divider
                      style={{ background: "#2A3547", margin: "12px 0 12px" }}
                    />
                  </div>
                ))}
          </div>
          <div className="sidebar-footer">
            {/* <Divider style={{ background: "#2A3547", margin: "12px 0 12px"}}/> */}
            <Row>
              <Col span={19}>
                <p className="sidebar-text_footer">MEMBERS</p>
              </Col>
              <Col span={5}>
                <p className="sidebar-count_footer">{members_count || "0"}</p>
              </Col>
            </Row>
            <Row>
              <Col span={19}>
                <p className="sidebar-text_footer">BRANDS</p>
              </Col>
              <Col span={5}>
                <p className="sidebar-count_footer">{brands_count || "0"}</p>
              </Col>
            </Row>
            <Tooltip
              placement="topRight"
              tilte={
                !this.verified(
                  "view_add_and_modify_clients_branches_brands_bus"
                ) && "You don't have any permission"
              }
            >
              <Button
                type="primary"
                block
                onClick={() => this.showAddBu()}
                disabled={
                  !this.verified(
                    "view_add_and_modify_clients_branches_brands_bus"
                  )
                }
              >
                Add Business Unit
              </Button>
            </Tooltip>
          </div>
        </Row>
        <AddBusinessUnitModal
          visible={this.state.addBusinessUnitModal}
          onCancel={this.handleClose}
          title="Add New Business Unit"
          content={<CreateBusinessUnit onSave={this.handleAddBu} />}
        />
        <EditClientModal
          visible={this.state.editClientModal}
          onCancel={this.handleClose}
          title="Update Client"
          content={
            <UpdateClient
              onSave={this.handleEditClient}
              data={{ name, code, enabled }}
            />
          }
        />
        <AddBranchModal
          visible={this.state.addBranch}
          onCancel={this.handleClose}
          title="Add New Brand"
          content={<CreateBrand onSave={this.handleAddBrand} />}
        />
      </Row>
    );
  }
}

export default SideBar;
