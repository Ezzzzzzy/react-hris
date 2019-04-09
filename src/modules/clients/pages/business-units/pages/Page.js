import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Form,
  Input,
  Select,
  Button,
  Table,
  Switch,
  Icon,
  Tooltip,
  Breadcrumb,
  message
} from "antd";
import ClientLayout from "../../../components/Client";
import ClientHeader from "../../../components/Header";
import CreateModal from "../../../../../commons/Modal";
import UpdateModal from "../../../../../commons/Modal";

const Option = Select.Option;
const FormItem = Form.Item;

let id = null;

class Page extends Component {
  state = {
    createModalVisible: false,
    updateModalVisible: false,

    selectedData: null,
    client_id: null,
    bu_id: null,

    filters: {
      enabled: ""
    }
  };

  componentDidMount() {
    id = this.props.match.params.id;
    this.setState({ client_id: id }, () => {
      this.props.getClientBusinessUnitsRequest(id, {});
      this.props.getAllClientBusinessUnitsRequest(id);
    });
  }

  componentDidUpdate(nextProps, nextState) {
    const { toast } = this.props;
    if (!!toast) {
      switch (toast.type) {
        case "success":
          message.success(toast.message, 1.5, () => {
            this.props.removeToast();
            this.handleClose();
            this.props.getClientBusinessUnitsRequest(
              this.state.client_id,
              this.state.filters
            );
          });
          break;
        case "error":
          message.error(toast.message, 3, () => {
            this.props.removeToast();
          });
          break;
        default:
          break;
      }
    }
  }

  showCreateModal = () => {
    this.setState({ createModalVisible: true });
  };

  showUpdateModal = selectedData => {
    this.setState({ selectedData, updateModalVisible: true });
  };

  handleClose = () => {
    this.setState({
      createModalVisible: false,
      updateModalVisible: false
    });
  };

  handleSave = data => {
    this.props.createClientBusinessUnitRequest(this.state.client_id, data);
  };

  handleUpdate = data => {
    this.props.updateClientBusinessUnitRequest(
      this.state.client_id,
      this.state.selectedData.id,
      data
    );
  };

  onChangeFilter = (value, name) => {
    let filters = this.state.filters;
    filters[name] = value;
    this.setState({ filters }, () =>
      this.props.getClientBusinessUnitsRequest(
        this.state.client_id,
        this.state.filters
      )
    );
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
    const { data, meta } = this.props.business_units;
    const client_id = this.props.match.params.id;
    const { isLoading, user } = this.props;

    const CreateForm = Form.create()(props => {
      const { form, user } = props;
      const { getFieldDecorator } = form;

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
                  ],
                  initialValue: 1
                })(
                  <Select placeholder="Status">
                    <Option value={1}>Enabled</Option>
                    <Option value={0}>Disabled</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
          </Row>
          {
            <Tooltip
              title={
                !this.verified(
                  "view_add_and_modify_clients_branches_brands_bus"
                ) && "You don't have any permissions"
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
          }
        </Form>
      );
    });

    const UpdateForm = Form.create()(props => {
      const { form, data, user } = props;
      const { getFieldDecorator } = form;

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
              <FormItem label="Business Unit">
                {getFieldDecorator("business_unit_name", {
                  rules: [
                    {
                      required: true,
                      message: "Please enter business unit"
                    }
                  ],
                  initialValue: data.business_unit_name
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
                  <Select
                    placeholder="Status"
                    disabled={data.members_count > 0 ? true : false}
                  >
                    <Option value={1}>Enabled</Option>
                    <Option value={0}>Disabled</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
          </Row>
          <Button type="primary" onClick={okHandle} style={{ width: "100%" }}>
            Update Business Unit
          </Button>
        </Form>
      );
    });

    const columns = [
      {
        title: "Business Unit Name",
        dataIndex: "business_unit_name",
        key: "business_unit_name"
      },
      {
        title: "Short Code",
        dataIndex: "code",
        key: "code"
      },
      {
        title: "Brands",
        dataIndex: "brands_count",
        key: "brands_count"
      },
      {
        title: "Members",
        dataIndex: "member_count",
        key: "member_count"
      },
      {
        title: "Status",
        dataIndex: "enabled",
        key: "enabled",
        render: (text, record) => {
          return (
            <Switch
              checked={text === 1 ? true : false}
              onChange={enabled => {
                enabled = enabled === true ? 1 : 0;
                const { business_unit_name, code, last_modified_by } = record;
                if (record.member_count > 0) {
                  message.warning("Cannot update status");
                } else {
                  this.props.updateClientBusinessUnitRequest(
                    this.state.client_id,
                    record.id,
                    {
                      business_unit_name,
                      enabled,
                      code,
                      last_modified_by
                    }
                  );
                }
              }}
            />
          );
        }
      },
      {
        title: "Last Modified",
        dataIndex: "last_modified",
        key: "last_modified",
        render: (text, record) => {
          return (
            <Tooltip placement="top" title={record.last_modified_by}>
              {record.last_modified}
            </Tooltip>
          );
        }
      },
      {
        title: "Action",
        dataIndex: "action",
        key: "action",
        render: (text, record) => {
          return (
            <div>
              <a onClick={() => this.showUpdateModal(record)}>
                <Icon type="edit" />
              </a>
            </div>
          );
        }
      }
    ];

    const breadcrumbList = [
      {
        title: "Clients",
        url: "/clients"
      },
      {
        title: this.props.client_details.code,
        url: `/client/${this.props.client_details.id}/members`
      },
      {
        title: "Business Units",
        url: `/client/${this.props.client_details.id}/business-units`
      }
    ];

    return (
      <Row>
        <Row>
          <Col span={24}>
            <ClientHeader {...this.props.client_details} />
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ margin: "8px 32px 24px" }}>
            <Breadcrumb className="breadcrumb" separator=">">
              {breadcrumbList.map(item => (
                <Breadcrumb.Item key={item.title}>
                  {item.url ? (
                    <Link to={item.url}>{item.title}</Link>
                  ) : (
                    item.title
                  )}
                </Breadcrumb.Item>
              ))}
            </Breadcrumb>
          </Col>
        </Row>
        <Row style={{ margin: "40px 30px" }}>
          <Col span={24}>
            <Row style={{ marginBottom: "10px" }}>
              <Col span={8}>
                <Row gutter={8}>
                  <Col span={10}>
                    <Select
                      placeholder="Status"
                      style={{ width: "100%" }}
                      onChange={value => this.onChangeFilter(value, "enabled")}
                    >
                      <Option value="">View All</Option>
                      <Option value={1}>All Enabled</Option>
                      <Option value={0}>All Disabled</Option>
                    </Select>
                  </Col>
                </Row>
              </Col>

              <Col span={16}>
                <Row gutter={16}>
                  <Col span={5} />
                  <Col span={12}>
                    <Input.Search
                      placeholder="Search by Business Unit or BU Short Code"
                      onSearch={q => {
                        this.props.getClientBusinessUnitsRequest(client_id, {
                          q
                        });
                      }}
                    />
                  </Col>
                  <Col span={7}>
                    <Button
                      type="primary"
                      style={{ width: "100%" }}
                      onClick={this.showCreateModal}
                    >
                      <Icon type="plus" />
                      New Business Unit
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Table
              pagination={{
                ...meta,
                onShowSizeChange: (current, limit) =>
                  this.props.getClientBusinessUnitsRequest(client_id, {
                    limit
                  }),
                showSizeChanger: true,
                onChange: page =>
                  this.props.getClientBusinessUnitsRequest(client_id, { page }),
                showTotal: (total, range) =>
                  `${range[0]}-${range[1]} o f ${total} items`
              }}
              rowKey={record => record.id}
              columns={columns}
              loading={isLoading}
              dataSource={data}
              style={{ background: "#fff" }}
            />
          </Col>
        </Row>
        <CreateModal
          title="Add New Business Unit"
          visible={this.state.createModalVisible}
          onCancel={this.handleClose}
          content={<CreateForm onSave={this.handleSave} user={user} />}
        />
        <UpdateModal
          title="Update Business Unit"
          visible={this.state.updateModalVisible}
          onCancel={this.handleClose}
          content={
            <UpdateForm
              onSave={this.handleUpdate}
              data={this.state.selectedData}
              user={user}
            />
          }
        />
      </Row>
    );
  }
}

const ClientPage = ClientLayout(Page, 3);

export default ClientPage;
