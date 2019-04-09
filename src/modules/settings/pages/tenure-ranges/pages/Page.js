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
  Form
} from "antd";

import "./index.css";

const FormItem = Form.Item;
const Option = Select.Option;

const CreateForm = Form.create()(props => {
  const { form } = props;

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
          <FormItem label="Title">
            {form.getFieldDecorator("tenure_type", {
              rules: [{ required: true, message: "Please input title" }]
            })(<Input placeholder="Title" />)}
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem label="From">
            {form.getFieldDecorator("month_start_range", {
              rules: [{ required: true, message: "Please input range" }]
            })(
              <Input
                placeholder="range"
                min={0}
                addonAfter="mos"
                style={{ width: "150px" }}
              />
            )}
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem label="To (Inclusive)">
            {form.getFieldDecorator("month_end_range", {
              rules: [{ required: true, message: "Please input range" }]
            })(
              <Input
                placeholder="range"
                style={{ width: "150px" }}
                addonAfter="mos"
              />
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
  const { form, data } = props;

  const okHandle = () => {
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      props.onSave(data.id, fieldsValue);
    });
  };

  return (
    <Form layout="vertical">
      <Row gutter={8}>
        <Col span={24}>
          <FormItem label="Title">
            {form.getFieldDecorator("tenure_type", {
              rules: [{ required: true, message: "Please input title" }],
              initialValue: data.tenure_type
            })(<Input placeholder="Title" />)}
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem label="From">
            {form.getFieldDecorator("month_start_range", {
              rules: [{ required: true, message: "Please input range" }],
              initialValue: data.month_start_range
            })(
              <Input
                placeholder="range"
                min={0}
                addonAfter="mos"
                style={{ width: "150px" }}
              />
            )}
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem label="To (Inclusive)">
            {form.getFieldDecorator("month_end_range", {
              rules: [{ required: true, message: "Please input range" }],
              initialValue: data.month_end_range
            })(
              <Input
                placeholder="range"
                style={{ width: "150px" }}
                addonAfter="mos"
              />
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
    this.props.getTenureRangesRequest({});
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
    this.props.deleteTenureRange(id);
    this.setState({
      deleteModalVisible: false
    });
  };

  handleSave = body => {
    body = {
      last_modified_by: "Neil Nato",
      ...body
    };
    this.props.createTenureRange(body);
    this.setState({
      addModalVisible: false
    });
  };

  handleUpdate = (id, body) => {
    body = {
      last_modified_by: "Neil Nato",
      ...body
    };
    this.props.updateTenureRange(id, body);
    this.setState({
      updateModalVisible: false
    });
  };

  onChangeFilter = (val, propName) => {
    let filters = Object.assign({}, this.state.filters);

    filters[propName] = val;

    this.setState({ filters }, () => {
      this.props.getTenureRangesRequest(this.state.filters);
    });
  };

  render() {
    const { isAuthenticated, tenureRanges, meta, isLoading } = this.props;
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
        title: "Title",
        dataIndex: "tenure_type",
        key: "tenure_type"
      },
      {
        title: "Range",
        dataIndex: "range",
        key: "range"
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
              this.props.updateTenureRange(record.id, {
                ...record,
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
            <h1>Manage Tenure Ranges</h1>
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
              placeholder="Search by Title or ID"
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
              New Range
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
              dataSource={tenureRanges}
              style={{ background: "#fff" }}
            />
          </Col>
        </Row>
        <DeleteModal
          visible={this.state.deleteModalVisible}
          onOk={this.handleDelete}
          onCancel={this.handleClose}
          title="Are you sure?"
          content="Once deleted, you will not be able to recover this range"
        />

        <AddModal
          visible={this.state.addModalVisible}
          onCancel={this.handleClose}
          title="Add New Tenure Range"
          content={<CreateForm onSave={this.handleSave} />}
        />

        <UpdateModal
          visible={this.state.updateModalVisible}
          onCancel={this.handleClose}
          title="Update Tenure Range"
          content={
            <UpdateForm onSave={this.handleUpdate} data={this.state.selected} />
          }
        />
      </div>
    );
  }
}

const SettingsPage = SettingsLayout(Page, 1);

export default SettingsPage;
