import React, { Component } from "react";
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
  const { form, cities, user } = props;

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
          <FormItem label="Location">
            {form.getFieldDecorator("location_name", {
              rules: [{ required: true, message: "Please input position" }]
            })(<Input placeholder="Location" />)}
          </FormItem>
        </Col>
        <Col span={24}>
          <FormItem label="City">
            {form.getFieldDecorator("city_id", {
              rules: [{ required: true, message: "Please select city" }]
            })(
              <Select style={{ width: "100%" }} placeholder="City">
                {cities &&
                  cities.map((val, i) => (
                    <Option value={val.id} key={i}>
                      {val.city_name}
                    </Option>
                  ))}
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
  const { form, data, cities, user } = props;

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
          <FormItem label="Location">
            {form.getFieldDecorator("location_name", {
              rules: [{ required: true, message: "Please input position" }],
              initialValue: data.location_name
            })(<Input placeholder="Location" />)}
          </FormItem>
        </Col>
        <Col span={24}>
          <FormItem label="City">
            {form.getFieldDecorator("city_id", {
              rules: [{ required: true, message: "Please select city" }],
              initialValue: data.city_id
            })(
              <Select style={{ width: "100%" }} placeholder="City">
                {cities.map((item, key) => {
                  return (
                    <Option value={item.id} key={key}>
                      {item.city_name}
                    </Option>
                  );
                })}
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
    filters: {}
  };

  componentDidMount() {
    this.props.getLocationsRequest({});
    this.props.allCity();
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
    this.props.deleteLocation(id);
    this.setState({
      deleteModalVisible: false
    });
  };

  handleSave = body => {
    this.props.createLocation({ ...body });
    this.setState({
      addModalVisible: false
    });
  };

  handleUpdate = (id, body) => {
    this.props.updateLocation(id, { ...body });
    this.setState({
      updateModalVisible: false
    });
  };

  onChangeFilter = (val, propName) => {
    let filters = Object.assign({}, this.state.filters);

    filters[propName] = val;

    this.setState({ filters }, () => {
      this.props.getLocationsRequest(this.state.filters);
    });
  };

  render() {
    const { locations, meta, cities, isLoading, user } = this.props;
    const columns = [
      {
        title: "Id",
        dataIndex: "id",
        key: "id"
      },
      {
        title: "Name",
        dataIndex: "location_name",
        key: "location_name"
      },
      {
        title: "City",
        dataIndex: "city",
        key: "city"
      },
      {
        title: "Region",
        dataIndex: "region",
        key: "region"
      },
      {
        title: "Last Modified",
        dataIndex: "last_modified_by",
        key: "last_modified_by"
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
              this.props.updateLocation(record.id, {
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
            <h1>Manage Branch Locations</h1>
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
              placeholder="Search by Location Name"
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
              New Location
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
                onChange: page => this.onChangeFilter(page, "page"),
                showTotal: (total, range) =>
                  `${range[0]}-${range[1]} of ${total} items`
              }}
              loading={isLoading}
              rowKey={record => record.id}
              columns={columns}
              dataSource={locations}
              style={{ background: "#fff" }}
            />
          </Col>
        </Row>
        <DeleteModal
          visible={this.state.deleteModalVisible}
          onOk={this.handleDelete}
          onCancel={this.handleClose}
          title="Are you sure?"
          content="Once deleted, you will not be able to recover this location"
        />

        <AddModal
          visible={this.state.addModalVisible}
          onCancel={this.handleClose}
          title="Add New Location"
          content={
            <CreateForm onSave={this.handleSave} cities={cities} user={user} />
          }
        />

        <UpdateModal
          visible={this.state.updateModalVisible}
          onCancel={this.handleClose}
          title="Update Location"
          content={
            <UpdateForm
              onSave={this.handleUpdate}
              user={user}
              data={this.state.selected}
              cities={cities}
            />
          }
        />
      </div>
    );
  }
}

const SettingsPage = SettingsLayout(Page, 1);

export default SettingsPage;
