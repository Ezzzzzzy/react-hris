import React, { Component, Fragment } from "react";
import StatusCircle from "../../../../../commons/StatusCircle";
import SettingsLayout from "../../../components/Settings";

import DeleteModal from "../../../../../commons/DeleteModal";
import AddModal from "../../../../../commons/Modal";
import UpdateModal from "../../../../../commons/Modal";

import {
  Table,
  Row,
  Col,
  Select,
  Input,
  Button,
  Switch,
  Icon,
  // Divider,
  InputNumber,
  Form,
  Radio
} from "antd";

import "./index.css";

const Option = Select.Option;
const FormItem = Form.Item;
const RadioGroup = Radio.Group;

const CreateForm = Form.create()(props => {
  const { form, user } = props;

  const okHandle = () => {
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      form.resetFields();
      props.onSave(fieldsValue);
    });
  };

  form.getFieldDecorator("last_modified_by", { initialValue: user.name });

  return (
    <Form layout="vertical">
      <Row gutter={8}>
        <Col span={24}>
          <FormItem label="Status Name">
            {form.getFieldDecorator("status_name", {
              rules: [{ required: true, message: "Please input status name" }]
            })(<Input placeholder="Status Name" />)}
          </FormItem>
        </Col>
        <Col xl={8} md={12} sm={24} xs={24}>
          <FormItem label="Order">
            {form.getFieldDecorator("order", {
              rules: [{ required: true, message: "Please input order" }]
            })(
              <InputNumber
                min={0}
                placeholder="Order"
                style={{ width: "100%" }}
              />
            )}
          </FormItem>
        </Col>
        <Col
          xl={16}
          md={12}
          sm={24}
          xs={24}
          className="color-selector-container"
        >
          <FormItem label="Status Color">
            {form.getFieldDecorator("color", {
              rules: [{ required: true, message: "Please select status color" }]
            })(
              <RadioGroup name="color" className="color-selector">
                <Radio value="#047AE6">
                  <span
                    className="color-selector-item"
                    style={{ background: "#047AE6" }}
                  />
                </Radio>
                <Radio value="#169C28">
                  <span
                    className="color-selector-item"
                    style={{ background: "#169C28" }}
                  />
                </Radio>
                <Radio value="#F58105">
                  <span
                    className="color-selector-item"
                    style={{ background: "#F58105" }}
                  />
                </Radio>
                <Radio value="#F34D49">
                  <span
                    className="color-selector-item"
                    style={{ background: "#F34D49" }}
                  />
                </Radio>
                <Radio value="#444444">
                  <span
                    className="color-selector-item"
                    style={{ background: "#444444" }}
                  />
                </Radio>
                <Radio value="#55667A">
                  <span
                    className="color-selector-item"
                    style={{ background: "#55667A" }}
                  />
                </Radio>
              </RadioGroup>
            )}
          </FormItem>
        </Col>

        <Col span={24}>
          <FormItem label="Type">
            {form.getFieldDecorator("type", {
              rules: [{ required: true, message: "Please select type" }]
            })(
              <Select style={{ width: "100%" }} placeholder="Type">
                <Option value="active">Active</Option>
                <Option value="inactive">Inactive</Option>
              </Select>
            )}
          </FormItem>
        </Col>

        <Col span={24}>
          <FormItem label="Status">
            {form.getFieldDecorator("enabled", {
              rules: [{ required: true, message: "Please select status" }]
            })(
              <Select style={{ width: "100%" }} placeholder="Status">
                <Option value={1}>Enabled</Option>
                <Option value={0}>Disabled</Option>
              </Select>
            )}
          </FormItem>
        </Col>
      </Row>

      <Button type="primary" onClick={okHandle} style={{ width: "100%" }}>
        Save
      </Button>
    </Form>
  );
});

const UpdateForm = Form.create()(props => {
  const { form, data, user } = props;

  const okHandle = () => {
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      props.onSave(data.id, fieldsValue);
    });
  };

  form.getFieldDecorator("last_modified_by", { initialValue: user.name });

  return (
    <Form layout="vertical">
      <Row gutter={8}>
        <Col span={24}>
          <FormItem label="Status Name">
            {form.getFieldDecorator("status_name", {
              rules: [
                {
                  required: true,
                  message: "Please input status name"
                }
              ],
              initialValue: data.status_name
            })(<Input placeholder="Status Name" />)}
          </FormItem>
        </Col>
        <Col xl={8} md={12} sm={24} xs={24}>
          <FormItem label="Order">
            {form.getFieldDecorator("order", {
              rules: [{ required: true, message: "Please input order" }],
              initialValue: data.order
            })(
              <InputNumber
                min={0}
                placeholder="Order"
                style={{ width: "100%" }}
              />
            )}
          </FormItem>
        </Col>
        <Col
          xl={16}
          md={12}
          sm={24}
          xs={24}
          className="color-selector-container"
        >
          <FormItem label="Status Color">
            {form.getFieldDecorator("color", {
              rules: [
                { required: true, message: "Please select status color" }
              ],
              initialValue: data.color
            })(
              <RadioGroup name="color" className="color-selector">
                <Radio value="#047AE6">
                  <span
                    className="color-selector-item"
                    style={{ background: "#047AE6" }}
                  />
                </Radio>
                <Radio value="#169C28">
                  <span
                    className="color-selector-item"
                    style={{ background: "#169C28" }}
                  />
                </Radio>
                <Radio value="#F58105">
                  <span
                    className="color-selector-item"
                    style={{ background: "#F58105" }}
                  />
                </Radio>
                <Radio value="#F34D49">
                  <span
                    className="color-selector-item"
                    style={{ background: "#F34D49" }}
                  />
                </Radio>
                <Radio value="#444444">
                  <span
                    className="color-selector-item"
                    style={{ background: "#444444" }}
                  />
                </Radio>
                <Radio value="#55667A">
                  <span
                    className="color-selector-item"
                    style={{ background: "#55667A" }}
                  />
                </Radio>
              </RadioGroup>
            )}
          </FormItem>
        </Col>

        <Col span={24}>
          <FormItem label="Type">
            {form.getFieldDecorator("type", {
              rules: [{ required: true, message: "Please select type" }],
              initialValue: data.type
            })(
              <Select style={{ width: "100%" }} placeholder="Type">
                <Option value="active">Active</Option>
                <Option value="inactive">Inactive</Option>
              </Select>
            )}
          </FormItem>
        </Col>

        <Col span={24}>
          <FormItem label="Status">
            {form.getFieldDecorator("enabled", {
              rules: [{ required: true, message: "Please select status" }],
              initialValue: data.enabled
            })(
              <Select style={{ width: "100%" }} placeholder="Status">
                <Option value={1}>Enabled</Option>
                <Option value={0}>Disabled</Option>
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
});

class Page extends Component {
  state = {
    selectedId: null,
    selected: null,
    deleteModalVisible: false,
    updateModalVisible: false,
    addModalVisible: false,
    filters: {}
  };

  componentDidMount() {
    this.props.getEmployeeStatusesRequest({});
  }

  handleClose = () => {
    this.setState({
      deleteModalVisible: false,
      addModalVisible: false,
      updateModalVisible: false
    });
  };

  showDeleteModal = id => {
    this.setState({
      selectedId: id,
      deleteModalVisible: true
    });
  };

  showUpdateModal = record => {
    this.setState({
      selected: record,
      updateModalVisible: true
    });
  };

  showAddModal = () => {
    this.setState({
      addModalVisible: true
    });
  };

  handleDelete = () => {
    let id = this.state.selectedId;
    this.props.deleteEmployeeStatus(id);
    this.setState({
      deleteModalVisible: false
    });
  };

  handleUpdate = (id, body) => {
    this.props.updateEmployeeStatus(id, { ...body });
    this.setState({ updateModalVisible: false });
  };

  handleSave = body => {
    this.props.createEmployeeStatus({ ...body });
    this.setState({
      addModalVisible: false
    });
  };

  onChangeFilter = (val, propName) => {
    let filters = Object.assign({}, this.state.filters);

    filters[propName] = val;

    this.setState({ filters }, () => {
      this.props.getEmployeeStatusesRequest(this.state.filters);
    });
  };

  render() {
    const { employeeStatuses, meta, isLoading, user } = this.props;

    const columns = [
      {
        title: "Id",
        dataIndex: "id",
        key: "id"
      },
      {
        title: "Status Name",
        dataIndex: "status_name",
        key: "status_name",
        render: (text, record) => (
          <Fragment>
            <StatusCircle color={record.color} />
            {text}
          </Fragment>
        )
      },
      {
        title: "Type",
        dataIndex: "type",
        key: "type",
        render: text => text.charAt(0).toUpperCase() + text.slice(1)
      },
      {
        title: "Last Modified",
        dataIndex: "last_modified_by",
        key: "last_modified_by"
      },
      {
        title: "Order",
        dataIndex: "order",
        key: "order"
      },
      {
        title: "Status",
        dataIndex: "enabled",
        key: "enabled",
        render: (text, record) => (
          <Switch
            checked={text === 1 ? true : false}
            onChange={enabled => {
              enabled = enabled === true ? 1 : 0;
              this.props.updateEmployeeStatus(record.id, {
                ...record,
                last_modified_by: user.name,
                enabled
              });
            }}
          />
        )
      },
      {
        title: "Action",
        dataIndex: "action",
        key: "action",
        render: (text, record) => {
          return (
            <div>
              <a onClick={() => this.showUpdateModal(record)}>
                <Icon type="edit" /> Edit
              </a>
              {/* <Divider type="vertical" />
              <a onClick={() => this.showDeleteModal(record.id)}>
                <Icon type="delete" /> Delete
              </a> */}
            </div>
          );
        }
      }
    ];

    return (
      <div>
        <Row>
          <Col span={24}>
            <h1>Manage Employee Status</h1>
          </Col>
        </Row>

        <Row gutter={16} style={{ marginBottom: "10px" }}>
          <Col span={7}>
            <Select
              defaultValue=""
              style={{ width: 150 }}
              onChange={enabled => this.onChangeFilter(enabled, "enabled")}
            >
              <Option value="">View All</Option>
              <Option value="1">View Enabled</Option>
              <Option value="0">View Disabled</Option>
            </Select>
          </Col>

          <Col span={13}>
            <Input
              placeholder="Search by Status Name or ID"
              onPressEnter={e => this.onChangeFilter(e.target.value, "q")}
            />
          </Col>
          <Col span={4}>
            <Button
              type="primary"
              style={{ width: "100%" }}
              onClick={this.showAddModal}
            >
              <Icon type="plus" />
              New Status
            </Button>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <Table
              pagination={{
                ...meta,
                onShowSizeChange: (current, limit) => {
                  this.onChangeFilter(limit, "limit");
                },
                showSizeChanger: true,
                onChange: page => {
                  this.onChangeFilter(page, "page");
                },
                showTotal: (total, range) =>
                  `${range[0]}-${range[1]} of ${total} items`
              }}
              loading={isLoading}
              rowKey="id"
              columns={columns}
              dataSource={employeeStatuses}
              style={{ background: "#fff" }}
            />
          </Col>
        </Row>

        <DeleteModal
          visible={this.state.deleteModalVisible}
          onOk={this.handleDelete}
          onCancel={this.handleClose}
          title="Are you sure?"
          content="Once deleted, you will not be able to recover this employee status"
        />

        <AddModal
          visible={this.state.addModalVisible}
          onCancel={this.handleClose}
          title="Add New Employee Status"
          content={<CreateForm onSave={this.handleSave} user={user} />}
        />

        <UpdateModal
          visible={this.state.updateModalVisible}
          onCancel={this.handleClose}
          title="Update Employee Status"
          content={
            <UpdateForm
              onSave={this.handleUpdate}
              user={user}
              data={this.state.selected}
            />
          }
        />
      </div>
    );
  }
}

const SettingsPage = SettingsLayout(Page, 1);

export default SettingsPage;
