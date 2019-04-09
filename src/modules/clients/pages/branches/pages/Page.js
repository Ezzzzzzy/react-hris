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

let client_id = null;

class Page extends Component {
  state = {
    createModalVisible: false,
    updateModalVisible: false,

    selectedData: null,
    client_id: null,
    branch_id: null,

    id: "",
    filters: {
      enabled: "",
      region: "",
      city: "",
      limit: ""
    }
  };
  componentDidMount() {
    client_id = this.props.match.params.id;
    this.props.getClientBranchesRequest(client_id, {});
    this.props.getClientBrandsAllRequest(client_id);
    this.props.allCity();
    this.props.allRegions();
  }

  componentDidUpdate() {
    const { toast } = this.props;
    if (!!toast) {
      switch (toast.type) {
        case "success":
          message.success(toast.message, 1.5, () => {
            this.handleClose();
            this.props.removeToast();
            this.props.getClientBranchesRequest(client_id, this.state.filters);
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
    this.props.allLocation();
  };

  showUpdateModal = selectedData => {
    // selectedData = {
    //   ...selectedData,
    // }
    this.setState({ selectedData, updateModalVisible: true });

    this.props.allLocation();
  };

  handleClose = () => {
    this.setState({
      createModalVisible: false,
      updateModalVisible: false
    });
  };

  handleSave = fields => {
    this.props.createClientBranchRequest(client_id, fields);
  };

  handleUpdate = fields => {
    this.props.updateClientBranchRequest(
      client_id,
      this.state.selectedData.branch_id,
      fields
    );
  };

  onChangeFilter(value, name) {
    let filters = this.state.filters;
    filters[name] = value;
    if (name === "region") filters["city"] = "";
    this.setState({ filters }, () =>
      this.props.getClientBranchesRequest(client_id, this.state.filters)
    );
  }

  render() {
    const { data, meta } = this.props.branches;
    const {
      brands_all,
      branch_locations,
      cities,
      regions,
      isLoading,
      user
    } = this.props;

    const Option = Select.Option;
    const FormItem = Form.Item;

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
              <FormItem label="Brand">
                {getFieldDecorator("brand_id", {
                  rules: [
                    {
                      required: true,
                      message: "Please select a brand"
                    }
                  ]
                })(
                  <Select
                    showSearch
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.props.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                    placeholder="Brand"
                  >
                    {brands_all &&
                      brands_all.map(brand => {
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
            <Col span={24}>
              <FormItem label="Branch Name">
                {getFieldDecorator("branch_name", {
                  rules: [
                    {
                      required: true,
                      message: "Please enter branch name"
                    }
                  ]
                })(<Input placeholder="Branch" />)}
              </FormItem>
            </Col>
            <Col span={16}>
              <FormItem label="Branch Location">
                {getFieldDecorator("location_id", {
                  rules: [
                    {
                      required: true,
                      message: "Please enter code"
                    }
                  ]
                })(
                  <Select
                    showSearch
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.props.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                    placeholder="Branch Location"
                  >
                    {branch_locations
                      .filter(location => location.enabled === 1)
                      .map(location => {
                        return (
                          <Option key={location.id} value={location.id}>
                            {location.location_name}
                          </Option>
                        );
                      })}
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col span={8}>
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
            Add Branch
          </Button>
        </Form>
      );
    });

    const UpdateForm = Form.create()(props => {
      const { form, data, user } = props;
      const { getFieldDecorator } = form;

      const okHandle = () => {
        form.validateFields((err, fieldsValue) => {
          if (err) return;
          // form.resetFields()
          props.onSave(fieldsValue);
        });
      };

      form.getFieldDecorator("last_modified_by", { initialValue: user.name });

      return (
        <Form layout="vertical">
          <Row gutter={8}>
            <Col span={24}>
              <FormItem label="Brand">
                {getFieldDecorator("brand_id", {
                  rules: [
                    {
                      required: true,
                      message: "Please select a brand"
                    }
                  ],
                  initialValue: data.brand_id
                })(
                  <Select
                    showSearch
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.props.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                    placeholder="Brand"
                  >
                    {brands_all &&
                      brands_all.map(brand => {
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
            <Col span={24}>
              <FormItem label="Branch Name">
                {getFieldDecorator("branch_name", {
                  rules: [
                    {
                      required: true,
                      message: "Please enter branch name"
                    }
                  ],
                  initialValue: data.branch_name
                })(<Input placeholder="Branch" />)}
              </FormItem>
            </Col>
            <Col span={16}>
              <FormItem label="Branch Location">
                {getFieldDecorator("location_id", {
                  rules: [
                    {
                      required: true,
                      message: "Please select location"
                    }
                  ],
                  initialValue: data.location_id
                })(
                  <Select
                    showSearch
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.props.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                    placeholder="Branch Location"
                  >
                    {branch_locations
                      .filter(location => location.enabled === 1)
                      .map(location => {
                        return (
                          <Option key={location.id} value={location.id}>
                            {location.location_name}
                          </Option>
                        );
                      })}
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col span={8}>
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
          <Button type="primary" onClick={okHandle} loading={isLoading} block>
            Update Branch
          </Button>
        </Form>
      );
    });

    const columns = [
      {
        title: "Branch Name",
        dataIndex: "branch_name",
        key: "branch_name"
      },
      {
        title: "Location",
        dataIndex: "location_name",
        key: "location_name"
      },
      {
        title: "City",
        dataIndex: "city_name",
        key: "city_name"
      },
      {
        title: "Region",
        dataIndex: "region_name",
        key: "region_name"
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
                const { branch_name, brand_id, location_id } = record;
                if (record.members_count > 0) {
                  message.warning("Cannot update status");
                } else {
                  this.props.updateClientBranchRequest(
                    client_id,
                    record.branch_id,
                    {
                      branch_name,
                      enabled,
                      location_id,
                      brand_id
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
            <Tooltip placement="top" title={record.last_modify_by}>
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
        title: "Branches",
        url: `/client/${this.props.client_details.id}/branches`
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
                  <Col span={6}>
                    <Select
                      placeholder="Status"
                      style={{ width: "100%" }}
                      onChange={value => this.onChangeFilter(value, "enabled")}
                    >
                      <Option value="">All Status</Option>
                      <Option value={1}>All Enabled</Option>
                      <Option value={0}>All Disabled</Option>
                    </Select>
                  </Col>
                  <Col span={9}>
                    <Select
                      placeholder="Region"
                      style={{ width: "100%" }}
                      showSearch
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                      onChange={value => this.onChangeFilter(value, "region")}
                    >
                      <Option value="">All Regions</Option>
                      {regions &&
                        regions
                          .filter(region => region.enabled === 1)
                          .map(region => {
                            return (
                              <Option key={region.id} value={region.id}>
                                {region.region_name}
                              </Option>
                            );
                          })}
                    </Select>
                  </Col>
                  <Col span={9}>
                    <Select
                      placeholder="City"
                      style={{ width: "100%" }}
                      showSearch
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.props.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                      onChange={value => this.onChangeFilter(value, "city")}
                      disabled={!this.state.filters.region ? true : false}
                    >
                      <Option value="">All Cities</Option>
                      {cities &&
                        this.state.filters.region &&
                        cities
                          .filter(
                            city =>
                              city.region_id === this.state.filters.region &&
                              city.enabled === 1
                          )
                          .map(city => (
                            <Option key={city.id} value={city.id}>
                              {city.city_name}
                            </Option>
                          ))}
                    </Select>
                  </Col>
                </Row>
              </Col>

              <Col span={13}>
                <Row gutter={16}>
                  <Col span={6} />
                  <Col span={12}>
                    <Input.Search
                      placeholder="Search Branch Name"
                      onSearch={q => {
                        this.props.getClientBranchesRequest(this.state.id, {
                          q
                        });
                      }}
                    />
                  </Col>
                  <Col span={6}>
                    <Button
                      type="primary"
                      style={{ width: "100%" }}
                      onClick={this.showCreateModal}
                    >
                      <Icon type="plus" />
                      New Branch
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
                  this.props.getClientBranchesRequest(client_id, { page }),
                showTotal: (total, range) =>
                  `${range[0]}-${range[1]} o f ${total} items`
              }}
              rowKey={record => record.branch_id}
              loading={isLoading}
              columns={columns}
              dataSource={data}
              style={{ background: "#fff" }}
            />
          </Col>
        </Row>
        <CreateModal
          title="Add New Branch"
          visible={this.state.createModalVisible}
          onCancel={this.handleClose}
          content={<CreateForm onSave={this.handleSave} user={user} />}
        />
        <UpdateModal
          title="Update Branch"
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

const ClientPage = ClientLayout(Page, 2);

export default ClientPage;
