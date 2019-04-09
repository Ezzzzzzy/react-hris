import React, { Component } from "react";
import { Redirect } from "react-router-dom";
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
  Divider,
  Form,
  InputNumber
} from "antd";

import "./index.css";

const FormItem = Form.Item;
const Option = Select.Option;

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
          <FormItem label="Position">
            {form.getFieldDecorator("position_name", {
              rules: [{ required: true, message: "Please input position" }]
            })(<Input placeholder="Position" />)}
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
        <Col xl={16} md={12} sm={24} xs={24}>
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
          <FormItem label="Position">
            {form.getFieldDecorator("position_name", {
              rules: [{ required: true, message: "Please input position" }],
              initialValue: data.position_name
            })(<Input placeholder="Position" />)}
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
        <Col xl={16} md={12} sm={24} xs={24}>
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
        Save
      </Button>
    </Form>
  );
});

class Page extends Component {
  state = {
    selectedId: null,
    selected: null,
    deleteModalVisible: false,
    addModalVisible: false,
    updateModalVisible: false,
    filters: {}
  };

  componentDidMount() {
    this.props.getPositionRequest({});
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

  showAddModal = () => {
    this.setState({
      addModalVisible: true
    });
  };

  showUpdateModal = record => {
    this.setState({
      selected: record,
      updateModalVisible: true
    });
  };

  handleDelete = () => {
    let id = this.state.selectedId;
    this.props.deletePosition(id);
    this.setState({
      deleteModalVisible: false
    });
  };

  handleSave = body => {
    this.props.createPosition({ ...body });
    this.setState({
      addModalVisible: false
    });
  };

  handleUpdate = (id, body) => {
    this.props.updatePosition(id, { ...body });
    this.setState({
      updateModalVisible: false
    });
  };

  onChangeFilter = (val, propName) => {
    let filters = Object.assign({}, this.state.filters);

    filters[propName] = val;

    this.setState({ filters }, () => {
      this.props.getPositionRequest(this.state.filters);
    });
  };

  render() {
    const { isAuthenticated, positions, meta, isLoading, user } = this.props;
    if (!isAuthenticated) {
      return <Redirect to="/" />;
    }

    const columns = [
      {
        title: "ID",
        dataIndex: "id",
        key: "id"
      },
      {
        title: "Position",
        dataIndex: "position_name",
        key: "position_name"
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
              this.props.updatePosition(record.id, {
                ...record,
                last_modified_by: user.name,
                enabled
              });
            }}
          />
        )
      },
      {
        title: "",
        dataIndex: "action",
        key: "action",
        render: (text, record) => {
          return (
            <div>
              <a onClick={() => this.showUpdateModal(record)}>
                <Icon type="edit" /> Edit
              </a>
              <Divider type="vertical" />
              <a onClick={() => this.showDeleteModal(record.id)}>
                <Icon type="delete" /> Delete
              </a>
            </div>
          );
        }
      }
    ];

    return (
      <div>
        <Row>
          <Col span={24}>
            <h1>Manage Positions</h1>
          </Col>
        </Row>

        <Row gutter={16} style={{ marginBottom: "10px" }}>
          <Col span={7}>
            <Select
              defaultValue="all"
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
              placeholder="Search by Position or ID"
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
              New Position
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
              rowKey={record => record.id}
              columns={columns}
              dataSource={positions}
              style={{ background: "#fff" }}
            />
          </Col>
        </Row>
        <DeleteModal
          visible={this.state.deleteModalVisible}
          onOk={this.handleDelete}
          onCancel={this.handleClose}
          title="Are you sure?"
          content="Once deleted, you will not be able to recover this position"
        />

        <AddModal
          visible={this.state.addModalVisible}
          onCancel={this.handleClose}
          title="Add New Position"
          content={<CreateForm onSave={this.handleSave} user={user} />}
        />

        <UpdateModal
          visible={this.state.updateModalVisible}
          onCancel={this.handleClose}
          title="Update Position"
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
