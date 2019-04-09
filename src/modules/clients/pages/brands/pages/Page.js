import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Input,
  Select,
  Button,
  Table,
  Switch,
  Icon,
  Form,
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
let client_id = null;
class Page extends Component {
  state = {
    createModalVisible: false,
    updateModalVisible: false,

    selectedData: null,
    client_id: null,
    brand_id: null,

    id: "",
    filters: {
      enabled: "",
      business_unit_id: "",
      page: 1,
      limit: 10
    }
  };

  componentDidMount() {
    client_id = this.props.match.params.id;
    this.props.getClientBrandsRequest(client_id, {});
    this.props.getAllClientBusinessUnitsRequest(client_id);
  }

  componentDidUpdate(nextProps, nextState) {
    const { toast } = this.props;
    if (!!toast) {
      switch (toast.type) {
        case "success":
          message.success(toast.message, 1.5, () => {
            this.props.removeToast();
            this.handleClose();
            this.props.getClientBrandsRequest(client_id, this.state.filters);
            this.props.getAllClientBusinessUnitsRequest(client_id);
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
    this.props.createClientBrandRequest(client_id, data);
  };

  handleUpdate = data => {
    this.props.updateClientBrandRequest(
      client_id,
      this.state.selectedData.id,
      data
    );
  };

  onChangeFilter(value, name) {
    let filters = this.state.filters;
    filters[name] = value;
    this.setState({ filters }, () =>
      this.props.getClientBrandsRequest(client_id, this.state.filters)
    );
  }
  render() {
    const { data, meta } = this.props.brands;
    const { business_units_all, isLoading, user } = this.props;

    const CreateForm = Form.create()(props => {
      const { form } = props;
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
                {getFieldDecorator("business_unit_id", {
                  rules: [
                    {
                      required: false,
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
                    {business_units_all &&
                      business_units_all.map((bu, i) => {
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
                  ],
                  initialValue: 1
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

    const UpdateForm = Form.create()(props => {
      const { form, data } = props;
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
                {getFieldDecorator("business_unit_id", {
                  rules: [
                    {
                      required: true,
                      message: "Please select a Business Unit"
                    }
                  ],
                  initialValue: data.business_unit_id
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
                    {business_units_all &&
                      business_units_all.map((bu, i) => {
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
                  ],
                  initialValue: data.brand_name
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
                  ],
                  initialValue: data.enabled
                })(
                  <Select
                    placeholder="Status"
                    disabled={data.members_count > 0 ? true : false}
                  >
                    <Option value={1}>Enable</Option>
                    <Option value={0}>Disable</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
          </Row>
          <Button type="primary" onClick={okHandle} loading={isLoading} block>
            Update Brand
          </Button>
        </Form>
      );
    });

    const columns = [
      {
        title: "Brand Name",
        dataIndex: "brand_name",
        key: "brand_name"
      },
      {
        title: "Business Unit",
        dataIndex: "business_unit_code",
        key: "business_unit_code",
        render: (text, record) => {
          return (
            <Tooltip placement="top" title={record.business_unit_name}>
              {text}
            </Tooltip>
          );
        }
      },
      {
        title: "Branches",
        dataIndex: "branches_count",
        key: "branches_count"
      },
      {
        title: "Members",
        dataIndex: "members_count",
        key: "members_count"
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
                const { business_unit_id, brand_name } = record;
                const last_modified_by = "Test User";
                if (record.members_count > 0) {
                  message.warning("Cannot update status");
                } else {
                  this.props.updateClientBrandRequest(
                    this.state.client_id,
                    record.id,
                    {
                      business_unit_id,
                      enabled,
                      brand_name,
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
        dataIndex: "updated_at",
        key: "updated_at",
        render: (text, record) => {
          return (
            <Tooltip placement="top" title={record.last_modified_by}>
              {text}
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
        title: "Brands",
        url: `/client/${this.props.client_details.id}/brands`
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
              <Col span={11}>
                <Row gutter={8}>
                  <Col span={7}>
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
                  <Col span={9}>
                    <Select
                      placeholder="Business Unit"
                      style={{ width: "100%" }}
                      showSearch
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                      onChange={value =>
                        this.onChangeFilter(value, "business_unit_id")
                      }
                    >
                      <Option value="">All Business Unit</Option>
                      {business_units_all &&
                        business_units_all.map((bu, i) => {
                          return (
                            <Option key={i} value={bu.id}>
                              {bu.business_unit_name}
                            </Option>
                          );
                        })}
                    </Select>
                  </Col>
                  <Col span={5} />
                </Row>
              </Col>

              <Col span={13}>
                <Row gutter={16}>
                  <Col span={4} />
                  <Col span={12}>
                    <Input.Search
                      placeholder="Search by Brand Name"
                      onSearch={q => {
                        this.props.getClientBrandsRequest(client_id, { q });
                      }}
                    />
                  </Col>
                  <Col span={8}>
                    <Button
                      type="primary"
                      style={{ width: "100%" }}
                      onClick={this.showCreateModal}
                    >
                      <Icon type="plus" />
                      New Brand
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
                  this.onChangeFilter(limit, "limit"),
                showSizeChanger: true,
                onChange: page =>
                  this.props.getClientBrandsRequest(client_id, { page }),
                showTotal: (total, range) =>
                  `${range[0]}-${range[1]} o f ${total} items`
              }}
              rowKey={record => record.id}
              loading={isLoading}
              columns={columns}
              dataSource={data}
              style={{ background: "#fff" }}
            />
          </Col>
        </Row>
        <CreateModal
          title="Add New Brand"
          visible={this.state.createModalVisible}
          onCancel={this.handleClose}
          content={<CreateForm onSave={this.handleSave} user={user} />}
        />
        <UpdateModal
          title="Update Brand"
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

const ClientPage = ClientLayout(Page, 1);

export default ClientPage;
